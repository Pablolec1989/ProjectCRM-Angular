import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RolService } from '../rol.service';
import { FormRolComponent } from '../form-rol/form-rol.component';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";

@Component({
  selector: 'app-crear-rol',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-rol.component.html',
  providers: [{
    provide: GENERIC_SERVICE_TOKEN, useClass: RolService
  }]
})
export class CrearRolComponent { 

  formularioRol = FormRolComponent;
}
