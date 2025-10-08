import { CommonModule } from '@angular/common';
import { TipoDireccionService } from '../tipoDireccion.service';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";
import { FormTipoDireccionComponent } from '../form-tipoDireccion/form-tipoDireccion.component';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-editar-tipo-direccion',
    imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-tipoDireccion.component.html',
    providers: [{ provide: GENERIC_SERVICE_TOKEN, useClass: TipoDireccionService }],
})
export class EditarTipoDireccionComponent
{
  @Input() id!: string;
  formularioTipoDireccion = FormTipoDireccionComponent;
}
