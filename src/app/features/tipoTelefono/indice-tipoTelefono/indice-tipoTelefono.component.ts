import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { TipoTelefonoService } from '../tipoTelefono.service';

@Component({
  selector: 'app-indice-tipo-telefono',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-tipoTelefono.component.html',
  providers: [
    {provide: GENERIC_SERVICE_TOKEN, useClass: TipoTelefonoService}
  ]
})
export class IndiceTipoTelefonoComponent { }
