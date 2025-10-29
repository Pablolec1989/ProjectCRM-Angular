import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { EmpresaService } from '../empresa.service';
import { TablaColumna } from '../../../shared/components/models/tabla-columna';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';

@Component({
  selector: 'app-indice-empresa',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-empresa.component.html',
  providers: [
  {provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService }
]
})

export class IndiceEmpresaComponent {

  columnas: TablaColumna[] = [{
    key: 'razonSocial',
    header: 'Nombre de empresa'}]

}
