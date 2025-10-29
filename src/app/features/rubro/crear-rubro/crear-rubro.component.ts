import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RubroFormComponent } from '../form-rubro/rubro-form.component';
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RubroService } from '../rubro.service';

@Component({
  selector: 'app-crear-rubro',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
],
  templateUrl: './crear-rubro.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: RubroService }
  ]
})
export class CrearRubroComponent {

  formularioRubro = RubroFormComponent;
}
