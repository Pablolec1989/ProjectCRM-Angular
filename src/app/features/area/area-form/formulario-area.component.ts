import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AreaService } from '../area.service';
import { AreaDTO } from '../../../models/areaDTO.model';

@Component({
  selector: 'app-formulario-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './formulario-area.component.html',
  styleUrl: './formulario-area.component.css',
})
export class FormularioAreaComponent implements OnInit {
  private formBuilder = inject(FormBuilder);

  @Input({ required: true })
  titulo!: string;

  @Input()
  modelo?: AreaDTO;

  @Output()
  posteoFormulario = new EventEmitter<AreaDTO>();

  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  //Formulario
  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
  });

  //Manejo de error
  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;
    if (nombre.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }
    let area = this.form.value as AreaDTO;
    this.posteoFormulario.emit(area);
  }
}
