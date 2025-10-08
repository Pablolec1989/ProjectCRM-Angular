import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { tipoDireccionDTO, tipoDireccionRequestDTO } from '../models/tipoDireccion.model';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-tipo-direccion',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
],
  templateUrl: './form-tipoDireccion.component.html',
})
export class FormTipoDireccionComponent implements OnInit {

  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: tipoDireccionDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<tipoDireccionRequestDTO>();
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
      const tipoDireccion = this.form.value as tipoDireccionRequestDTO;
      this.posteoFormulario.emit(tipoDireccion);
    }
  }

