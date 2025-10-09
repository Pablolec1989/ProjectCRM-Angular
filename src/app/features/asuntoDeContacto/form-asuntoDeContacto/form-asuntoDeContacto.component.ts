import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { AsuntoDeContactoService } from '../asuntoDeContacto.service';
import { asuntoDeContactoDTO, asuntoDeContactoRequestDTO } from '../models/asuntoDeContacto.model';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-asunto-de-contacto',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,

  ],
  templateUrl: './form-asuntoDeContacto.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AsuntoDeContactoService }
  ]
})
export class FormAsuntoDeContactoComponent implements OnInit {

  ngOnInit(): void {
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  @Input() model: asuntoDeContactoDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<asuntoDeContactoRequestDTO>();
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', {validators: [Validators.required]}],
  })


  obtenerErrorNombre(): string {
    let nombre = this.form.controls.nombre;
    if(nombre.hasError('required')){
      return 'El nombre es obligatorio';
    }
    return '';
  }

  guardarCambios()
  {
    if(!this.form.valid){
      return;
    }
      const asunto = this.form.value as asuntoDeContactoRequestDTO;
      this.posteoFormulario.emit(asunto);
    }
}
