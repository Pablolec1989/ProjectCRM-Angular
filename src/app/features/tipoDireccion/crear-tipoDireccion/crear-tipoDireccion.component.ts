import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TipoDireccionService } from '../tipoDireccion.service';
import { Router } from '@angular/router';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { FormTipoDireccionComponent } from '../form-tipoDireccion/form-tipoDireccion.component';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";

@Component({
    selector: 'app-crear-tipo-direccion',
    imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-tipoDireccion.component.html',
  providers: [{ provide: GENERIC_SERVICE_TOKEN, useClass: TipoDireccionService }]
})
export class CrearTipoDireccionComponent
{

  formularioTipoDireccion = FormTipoDireccionComponent;

}
