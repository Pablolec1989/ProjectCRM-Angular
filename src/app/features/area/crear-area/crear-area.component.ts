import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { AreaService } from '../area.service';
import { FormAreaComponent } from "../form-area/form-area.component";
import { GENERIC_SERVICE_TOKEN } from '../../../shared/components/povider/provider';
import { CrearGenericoComponent } from '../../../shared/components/crear-generico/crear-generico.component';

@Component({
  selector: 'app-crear-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FormAreaComponent,
    CrearGenericoComponent
],
  templateUrl: './crear-area.component.html',
  providers: [{
    provide: GENERIC_SERVICE_TOKEN, useClass: AreaService
  }]
})
export class CrearAreaComponent
{
  formularioArea = FormAreaComponent;
}
