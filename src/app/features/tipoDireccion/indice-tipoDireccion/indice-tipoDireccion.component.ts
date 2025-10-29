import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { TipoDireccionService } from '../tipoDireccion.service';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { TIPO_DIRECCION_SERVICE_TOKEN } from '../tipoDireccion.provider';

@Component({
    selector: 'app-indice-tipo-direccion',
    imports: [IndiceGenericoComponent],
    templateUrl: './indice-tipoDireccion.component.html',
    providers: [{ provide: GENERIC_SERVICE_TOKEN, useClass: TipoDireccionService }],
})
export class IndiceTipoDireccionComponent {


}
