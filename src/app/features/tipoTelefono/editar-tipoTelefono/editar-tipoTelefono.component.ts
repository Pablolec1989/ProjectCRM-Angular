import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { TipoTelefonoService } from '../tipoTelefono.service';
import { FormTipoTelefonoComponent } from '../form-tipoTelefono/form-tipoTelefono.component';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";

@Component({
  selector: 'app-editar-tipo-telefono',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-tipoTelefono.component.html',
  providers: [{
    provide: GENERIC_SERVICE_TOKEN, useClass: TipoTelefonoService
  }]
})
export class EditarTipoTelefonoComponent { 

  @Input() id!: string;
  formularioTipoTelefono = FormTipoTelefonoComponent;
}
