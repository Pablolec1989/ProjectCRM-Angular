import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { TipoDireccionService } from '../tipoDireccion.service';
import { MatButtonModule } from '@angular/material/button';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { tipoDireccionDTO, tipoDireccionRequestDTO } from '../models/tipoDireccion.model';

@Component({
    selector: 'app-lista-tipo-direccion',
    imports: [
        CommonModule,
        ListadoGenericoComponent,
        MatButtonModule
    ],
  templateUrl: './lista-tipoDireccion.component.html',
  providers: [
      {provide: GENERIC_SERVICE_TOKEN, useClass: TipoDireccionService}
    ]
})
export class ListaTipoDireccionComponent implements OnInit
{
  private readonly tipoDireccionService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<tipoDireccionDTO, tipoDireccionRequestDTO>;
  tiposDirecciones: tipoDireccionDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.tipoDireccionService.getAll().subscribe({
      next: (tiposDirecciones) => {
        this.tiposDirecciones = tiposDirecciones;
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }
    });
  }

  }

