import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { empresaDetailDTO, empresaRequestDTO } from '../models/empresa.model';
import { MatSelectModule } from '@angular/material/select';
import { condicionIvaDTO } from '../../condicionIva/models/condicionIva.models';
import { rubroDTO } from '../../rubro/models/rubro.model';
import { EmpresaService } from '../empresa.service';
import { errorCampoObligatorio } from 'src/app/shared/components/functions/errorCampoObligatorio';
import { CONDICION_IVA_SERVICE_TOKEN } from '../../condicionIva/condicionIva.provider';
import { RUBRO_SERVICE_TOKEN } from '../../rubro/rubro.provider';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { RubroService } from '../../rubro/rubro.service';
import { CondicionIvaService } from '../../condicionIva/condicionIva.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-empresa',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './form-empresa.component.html',
  providers: [
    { provide: EMPRESA_SERVICE_TOKEN, useClass: EmpresaService },
    { provide: RUBRO_SERVICE_TOKEN, useClass: RubroService },
    { provide: CONDICION_IVA_SERVICE_TOKEN, useClass: CondicionIvaService },
  ]
})
export class FormEmpresaComponent implements OnInit {

  @Output() posteoFormulario = new EventEmitter<empresaRequestDTO>()
  @Input() model:empresaDetailDTO | undefined
  private formbuilder = inject(FormBuilder);
  empresaService = inject(EMPRESA_SERVICE_TOKEN);
  rubroService = inject(RUBRO_SERVICE_TOKEN);
  condicionIvaService = inject(CONDICION_IVA_SERVICE_TOKEN);

  rubros: rubroDTO[] = [];
  condicionesIva: condicionIvaDTO[] = [];

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.formEmpresa.patchValue(this.model)
    }
    //Asociar el rubro a la empresa
    this.rubroService.getAll().subscribe((data) => {
    this.rubros = data;

    if (this.model?.rubro) {
      const rubroAsociado = this.rubros
        .find(rubro => rubro.id === this.model!.rubro.id);
      if (rubroAsociado) {
        this.formEmpresa.get('rubroId')?.setValue(rubroAsociado.id);
      }
    }
    });
    //Asociar condicionIva a la empresa
    this.condicionIvaService.getAll().subscribe((data) => {
      this.condicionesIva = data

    if (this.model?.condicionIva) {
      const condicionIvaAsociado = this.condicionesIva
        .find(condicionIva => condicionIva.id === this.model!.condicionIva.id);
      if (condicionIvaAsociado) {
        this.formEmpresa.get('condicionIvaId')?.setValue(condicionIvaAsociado.id);
      }
      }
    });
  }

  formEmpresa = this.formbuilder.group({
    razonSocial: ['', {validators:[Validators.required]}],
    cuit: [''],
    rubroId: ['', { validators: [Validators.required] }],
    condicionIvaId: ['', {validators: [Validators.required]}]
  });

  guardarCambios() {
    if (!this.formEmpresa.valid) {
      return;
    }
    const empresa = this.formEmpresa.value as empresaRequestDTO;
    this.posteoFormulario.emit(empresa);
    }

  obtenerErrorCampoRazonSocial(): string {
    let razonSocial = this.formEmpresa.controls.razonSocial;
    if (razonSocial.hasError('required')) {
      return errorCampoObligatorio()
    }
    return '';
  }

  obtenerErrorRubro(): string{
    let rubro = this.formEmpresa.controls.rubroId;
    if (rubro.hasError('required')) {
      return errorCampoObligatorio()
    }
    return '';
  }






}
