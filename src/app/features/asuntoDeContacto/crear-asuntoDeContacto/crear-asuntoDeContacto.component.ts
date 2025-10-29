import { FormAsuntoDeContactoComponent } from './../form-asuntoDeContacto/form-asuntoDeContacto.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { AsuntoDeContactoService } from '../asuntoDeContacto.service';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";

@Component({
  selector: 'app-crear-asunto-de-contacto',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-asuntoDeContacto.component.html',
    providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AsuntoDeContactoService }
  ]
})
export class CrearAsuntoDeContactoComponent {

  formularioAsuntoDeContacto = FormAsuntoDeContactoComponent;
}
