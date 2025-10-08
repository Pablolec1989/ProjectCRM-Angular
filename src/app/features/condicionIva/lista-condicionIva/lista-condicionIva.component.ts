import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { CondicionIvaService } from '../condicionIva.service';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { extractErrors } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { condicionIvaDTO, condicionIvaRequestDTO } from '../models/condicionIva.models';

@Component({
  selector: 'app-lista-condicion-iva',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './lista-condicionIva.component.html',
  providers: [
    {provide: GENERIC_SERVICE_TOKEN, useClass: CondicionIvaService }
  ]
})
export class ListaCondicionIvaComponent implements OnInit {

  private readonly condicionIvaService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<condicionIvaDTO, condicionIvaRequestDTO>;
  condicionIvaList : condicionIvaDTO[] = [];
  errors : string[] = [];

  ngOnInit(): void {
    this.condicionIvaService.getAll().subscribe({
      next: (condicionIvaList) => {
        this.condicionIvaList = condicionIvaList;
      },
      error: (err) => {
        this.errors = err;
        extractErrors(err);
      }
    });
  }


}
