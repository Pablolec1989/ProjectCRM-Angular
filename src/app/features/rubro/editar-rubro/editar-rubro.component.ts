import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RubroFormComponent } from '../form-rubro/rubro-form.component';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";
import { RubroService } from '../rubro.service';

@Component({
  selector: 'app-editar-rubro',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-rubro.component.html',
  providers:[
    {provide: GENERIC_SERVICE_TOKEN, useClass: RubroService}
  ]
})
export class EditarRubroComponent {

  @Input() id!: string;
  formularioRubro = RubroFormComponent;

}
