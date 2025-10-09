import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { AsuntoDeContactoService } from '../asuntoDeContacto.service';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";

@Component({
  selector: 'app-indice-asunto-de-contacto',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-asuntoDeContacto.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AsuntoDeContactoService }
  ]
})
export class IndiceAsuntoDeContactoComponent { }
