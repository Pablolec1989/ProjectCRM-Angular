import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { areaRequestDTO } from '../models/areaRequestDTO';
import { areaDTO } from '../models/areaDTO.model';

@Component({
    selector: 'app-form-area',
    imports: [
        RouterLink,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
    ],
    templateUrl: './form-area.component.html'
})
export class FormAreaComponent implements OnInit
{
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: areaDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<areaRequestDTO>();
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
      const area = this.form.value as areaRequestDTO;
      this.posteoFormulario.emit(area);
    }
  }


