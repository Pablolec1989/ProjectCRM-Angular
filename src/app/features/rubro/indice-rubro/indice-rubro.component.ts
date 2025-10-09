import { CommonModule } from '@angular/common';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RubroService } from '../rubro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-indice-rubro',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-rubro.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: RubroService }
  ]
})
export class IndiceRubroComponent { }
