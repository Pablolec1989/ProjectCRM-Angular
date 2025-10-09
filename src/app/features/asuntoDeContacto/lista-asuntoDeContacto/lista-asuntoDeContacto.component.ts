import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { AsuntoDeContactoService } from '../asuntoDeContacto.service';
import { asuntoDeContactoDTO, asuntoDeContactoRequestDTO } from '../models/asuntoDeContacto.model';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";

@Component({
  selector: 'app-lista-asunto-de-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './lista-asuntoDeContacto.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: AsuntoDeContactoService }
  ]
})
export class ListaAsuntoDeContactoComponent implements OnInit {

  private readonly asuntoDeContactoService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<asuntoDeContactoDTO, asuntoDeContactoRequestDTO>;
  asuntosDeContacto: asuntoDeContactoDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.asuntoDeContactoService.getAll().subscribe({
      next: (asuntos) => {
        this.asuntosDeContacto = asuntos as asuntoDeContactoDTO[];
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }
    });

  }

}
