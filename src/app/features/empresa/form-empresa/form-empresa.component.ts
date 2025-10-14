import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { empresaDetailDTO, empresaRequestDTO } from '../models/empresa.model';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { condicionIvaDTO } from '../../condicionIva/models/condicionIva.models';
import { rubroDTO } from '../../rubro/models/rubro.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-form-empresa',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './form-empresa.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService }
  ]
})
export class FormEmpresaComponent implements OnChanges {

  @Input() rubros: rubroDTO[] = [];
  @Input() condicionesIva: condicionIvaDTO[] = [];
  @Input() model?: empresaDetailDTO; // Si está definido, es edición
  @Output() posteoFormulario = new EventEmitter<empresaRequestDTO>();
  private fb = inject(FormBuilder);

  form = this.fb.group({
    razonSocial: ['', Validators.required],
    cuit: ['', Validators.required],
    rubroId: ['', Validators.required],
    condicionIvaId: ['', Validators.required],
  });

  ngOnChanges(changes: SimpleChanges): void {
    // Patch robusto: soporta creación y edición
    if ('model' in changes && this.model) {
      this.form.patchValue({
        razonSocial: this.model.razonSocial ?? '',
        cuit: this.model.cuit ?? '',
        rubroId: this.model.rubro?.id ?? '',
        condicionIvaId: this.model.condicionIva?.id ?? ''
      });
    } else if ('model' in changes && !this.model) {
      // Si el modelo NO está definido (creación), limpia el formulario
      this.form.reset();
    }
  }

  guardarCambios() {
    if (!this.form.valid) return;
    this.posteoFormulario.emit(this.form.value as empresaRequestDTO);
  }

}
