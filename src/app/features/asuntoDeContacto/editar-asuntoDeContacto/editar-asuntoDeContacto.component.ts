import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { AsuntoDeContactoService } from '../asuntoDeContacto.service';
import { FormAsuntoDeContactoComponent } from '../form-asuntoDeContacto/form-asuntoDeContacto.component';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";

@Component({
  selector: 'app-editar-asunto-de-contacto',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-asuntoDeContacto.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AsuntoDeContactoService }
  ]
})
export class EditarAsuntoDeContactoComponent {

  @Input() id!: string;
  formularioAsuntoDeContacto = FormAsuntoDeContactoComponent
}
