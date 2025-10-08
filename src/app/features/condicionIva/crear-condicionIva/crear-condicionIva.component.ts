import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";
import { FormCondicionIvaComponent } from '../form-condicionIva/form-condicionIva.component';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { CondicionIvaService } from '../condicionIva.service';

@Component({
  selector: 'app-crea-condicion-iva',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-condicionIva.component.html',
  providers: [{provide: GENERIC_SERVICE_TOKEN, useClass: CondicionIvaService}]
})
export class CrearCondicionIvaComponent {
  
  formularioCondicionIva = FormCondicionIvaComponent;

}
