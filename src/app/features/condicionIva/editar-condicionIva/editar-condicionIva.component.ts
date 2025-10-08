import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { CondicionIvaService } from '../condicionIva.service';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";
import { FormCondicionIvaComponent } from '../form-condicionIva/form-condicionIva.component';

@Component({
  selector: 'app-editar-condicion-iva',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-condicionIva.component.html',
  providers: [{provide: GENERIC_SERVICE_TOKEN, useClass: CondicionIvaService}]
})
export class EditarCondicionIvaComponent { 

  @Input() id!: string;
  formularioCondicionIva = FormCondicionIvaComponent;
}

