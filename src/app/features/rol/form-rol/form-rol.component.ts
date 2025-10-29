import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { rolDTO, rolRequestDTO } from '../rol.model';

@Component({
  selector: 'app-form-rol',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
],
  templateUrl: './form-rol.component.html',
})
export class FormRolComponent implements OnInit {

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: rolDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<rolRequestDTO>();
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
      const rol = this.form.value as rolRequestDTO;
    this.posteoFormulario.emit(rol);
    }
}
