import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RolService } from '../rol.service';
import { rolDTO, rolRequestDTO } from '../models/rol.model';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-rol',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './form-rol.component.html',
  providers: [{
    provide: GENERIC_SERVICE_TOKEN, useClass: RolService
  }]
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
