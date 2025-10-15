import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { empresaDetailDTO, empresaRequestDTO } from '../models/empresa.model';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { condicionIvaDTO, condicionIvaRequestDTO } from '../../condicionIva/models/condicionIva.models';
import { rubroDTO, rubroRequestDTO } from '../../rubro/models/rubro.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { EmpresaService } from '../empresa.service';
import { errorCampoObligatorio } from 'src/app/shared/components/functions/errorCampoObligatorio';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { CONDICION_IVA_SERVICE_TOKEN } from '../../condicionIva/condicionIva.provider';
import { RUBRO_SERVICE_TOKEN } from '../../rubro/rubro.provider';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { IEmpresaService } from '../IEmpresaService';

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
    { provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService }
  ]
})
export class FormEmpresaComponent implements OnInit {

  @Output() posteoFormulario = new EventEmitter<empresaRequestDTO>()
  @Input() model:empresaDetailDTO | undefined
  private formbuilder = inject(FormBuilder);
  empresaService = inject(EMPRESA_SERVICE_TOKEN) as IEmpresaService
  rubroService = inject(RUBRO_SERVICE_TOKEN) as IServiceBase<rubroDTO, rubroRequestDTO>
  condicionIvaService = inject(CONDICION_IVA_SERVICE_TOKEN) as IServiceBase<condicionIvaDTO, condicionIvaRequestDTO>

  rubros: rubroDTO[] = [];
  condicionesIva: condicionIvaDTO[] = [];

  ngOnInit(): void {
    console.log(this.model)

    if (this.model !== undefined) {
      this.form.patchValue(this.model)
    }
    //Asociar el rubro a la empresa
    this.rubroService.getAll().subscribe((data) => {
    this.rubros = data;

    if (this.model?.rubro) {
      const rubroAsociado = this.rubros
        .find(rubro => rubro.id === this.model!.rubro.id);
      if (rubroAsociado) {
        this.form.get('rubroId')?.setValue(rubroAsociado.id);
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
        this.form.get('condicionIvaId')?.setValue(condicionIvaAsociado.id);
      }
      }
    });
  }

  form = this.formbuilder.group({
    razonSocial: ['', {validators:[Validators.required]}],
    cuit: [''],
    rubroId: ['', { validators: [Validators.required] }],
    condicionIvaId: ['', {validators: [Validators.required]}]
  });

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    const empresa = this.form.value as empresaRequestDTO;
    this.posteoFormulario.emit(empresa);
    }

  obtenerErrorCampoRazonSocial(): string {
    let razonSocial = this.form.controls.razonSocial;
    if (razonSocial.hasError('required')) {
      return errorCampoObligatorio()
    }
    return '';
  }

  obtenerErrorRubro(): string{
    let rubro = this.form.controls.rubroId;
    if (rubro.hasError('required')) {
      return errorCampoObligatorio()
    }
    return '';
  }






}
