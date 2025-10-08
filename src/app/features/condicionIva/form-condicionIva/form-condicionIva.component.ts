import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { condicionIvaDTO, condicionIvaRequestDTO } from '../models/condicionIva.models';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { CondicionIvaService } from '../condicionIva.service';

@Component({
  selector: 'app-form-condicion-iva',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
],
  templateUrl: './form-condicionIva.component.html',
  providers: [{
    provide: GENERIC_SERVICE_TOKEN, useClass: CondicionIvaService
  }]
})
export class FormCondicionIvaComponent implements OnInit { 

    ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: condicionIvaDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<condicionIvaRequestDTO>();
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
      const area = this.form.value as condicionIvaRequestDTO;
      this.posteoFormulario.emit(area);
    }
}
