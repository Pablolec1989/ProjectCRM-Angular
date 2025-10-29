import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";
import { FormRolComponent } from '../form-rol/form-rol.component';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-editar-rol',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-rol.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: RolService}
  ]
})
export class EditarRolComponent {

  @Input() id!: string;
  formularioRol = FormRolComponent;
}
