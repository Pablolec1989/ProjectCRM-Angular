import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { usuarioDetailDTO, usuarioRequestDTO, usuarioDTO } from '../models/usuario.model';
import { USUARIO_SERVICE_TOKEN } from '../usuario.provider';
import { UsuarioService } from '../usuario.service';
import { AREA_SERVICE_TOKEN } from '../../area/area.provider';
import { AreaService } from '../../area/area.service';
import { areaDTO } from '../../area/models/area.model';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './form-usuario.component.html',
  providers: [
    { provide: USUARIO_SERVICE_TOKEN, useClass: UsuarioService },
    { provide: AREA_SERVICE_TOKEN, useClass: AreaService },
  ]
})
export class FormUsuarioComponent implements OnInit {

  @Output() posteoFormulario = new EventEmitter<usuarioRequestDTO>()
  @Input() model: usuarioDTO | undefined
  private formbuilder = inject(FormBuilder);
  usuarioService = inject(USUARIO_SERVICE_TOKEN)
  areaService = inject(AREA_SERVICE_TOKEN);

  usuarios: usuarioDTO[] = [];
  areas: areaDTO[] = [];

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.formUsuario.patchValue(this.model)
    }

    this.areaService.getAll().subscribe((data) => {
      this.areas = data;

      if (this.model?.area) {
        const areaAsociada = this.areas.find(area => area.id === this.model!.area.id);

        if (areaAsociada) {
          this.formUsuario.get('areaId')?.setValue(areaAsociada.id);
        }
      }

    });
  }

  formUsuario = this.formbuilder.group({
    nombre: ['', {validators:[Validators.required]}],
    apellido: ['', { validators: [Validators.required]}],
    areaId: ['', {validators: [Validators.required]}]
  });

  guardarCambios() {
    if(!this.formUsuario.valid){
      return;
    }
    const usuario = this.formUsuario.value as usuarioRequestDTO;
    this.posteoFormulario.emit(usuario);
  }

  obtenerErrorCampoNombre() {
    const campoNombre = this.formUsuario.controls.nombre;
    if(campoNombre.hasError('required')){
      return 'El campo es obligatorio';
    }
    return '';
  }
  obtenerErrorCampoApellido() {
    const campoApellido = this.formUsuario.controls.apellido;
    if(campoApellido.hasError('required')){
      return 'El campo es obligatorio';
    }
    return '';
  }
  obtenerErrorCampoArea() {
    const campoArea = this.formUsuario.controls.areaId;
    if(campoArea.hasError('required')){
      return 'El campo es obligatorio';
    }
    return '';
  }

}
