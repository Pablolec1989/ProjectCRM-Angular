import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { tipoDireccionDTO } from '../models/tipoDireccionDTO.model';
import { tipoDireccionRequestDTO } from '../models/tipoDireccionRequestDTO.model';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tipo-direccion-form',
    imports: [
        RouterLink,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
    ],
    templateUrl: './tipoDireccion-form.component.html'
})
export class TipoDireccionFormComponent implements OnInit{
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  private formBuilder = inject(FormBuilder)
  @Input() model: tipoDireccionDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<tipoDireccionRequestDTO>();

  form = this.formBuilder.group({
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
    if(!this.form.valid)
    {
      return;
    }
    const tipoDireccion = this.form.value as tipoDireccionRequestDTO;
    this.posteoFormulario.emit(tipoDireccion);

  }
}
