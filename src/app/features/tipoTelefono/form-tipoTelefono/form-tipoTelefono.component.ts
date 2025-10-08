import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { tipoTelefonoDTO, tipoTelefonoRequestDTO } from '../models/tipoTelefono.model';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-tipo-telefono',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
        
],
  templateUrl: './form-tipoTelefono.component.html',
})
export class FormTipoTelefonoComponent { 

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: tipoTelefonoDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<tipoTelefonoRequestDTO>();
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
      const tipoTelefono = this.form.value as tipoTelefonoRequestDTO;
      this.posteoFormulario.emit(tipoTelefono);
    }
}
