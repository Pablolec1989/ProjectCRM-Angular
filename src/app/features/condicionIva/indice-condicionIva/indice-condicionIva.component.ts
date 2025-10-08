import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { CondicionIvaService } from '../condicionIva.service';

@Component({
  selector: 'app-indice-condicion-iva',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-condicionIva.component.html',
  providers: [{provide: GENERIC_SERVICE_TOKEN, useClass: CondicionIvaService}]
})
export class IndiceCondicionIvaComponent { }
