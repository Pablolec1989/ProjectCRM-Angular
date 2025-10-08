import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormAreaComponent } from "../form-area/form-area.component";
import { AreaService } from '../area.service';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";

@Component({
    selector: 'app-editar-area',
    imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-area.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AreaService }
  ]
})
export class EditarAreaComponent {

  @Input() id!: string;
  formularioArea = FormAreaComponent;

}
