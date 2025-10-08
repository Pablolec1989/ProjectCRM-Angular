import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";
import { FormTipoTelefonoComponent } from '../form-tipoTelefono/form-tipoTelefono.component';

@Component({
  selector: 'app-crear-tipo-telefono',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-tipoTelefono.component.html',
})
export class CrearTipoTelefonoComponent { 

  formularioTipoTelefono = FormTipoTelefonoComponent;
}
