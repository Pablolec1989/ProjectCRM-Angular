import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RolService } from '../rol.service';
import { FormRolComponent } from '../form-rol/form-rol.component';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";

@Component({
  selector: 'app-editar-rol',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-rol.component.html',
  providers: [{
  provide: GENERIC_SERVICE_TOKEN, useClass: RolService
}]
})
export class EditarRolComponent { 

  @Input() id!: string;
  formularioRol = FormRolComponent;
}
