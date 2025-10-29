import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { rubroDTO, rubroRequestDTO } from '../models/rubro.model';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RubroService } from '../rubro.service';

@Component({
  selector: 'app-rubro-form',
  standalone: true,
  imports: [
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './rubro-form.component.html',
  providers: [
    {provide: GENERIC_SERVICE_TOKEN, useClass: RubroService}
  ]
})
export class RubroFormComponent implements OnInit {

    ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  @Input() model: rubroDTO | undefined;
  @Output() posteoFormulario = new EventEmitter<rubroRequestDTO>();
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
      const rubro = this.form.value as rubroRequestDTO;
      this.posteoFormulario.emit(rubro);
    }
}
