import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { IServiceBase } from '../../../shared/interfaces/IServiceBase';
import { RubroService } from '../rubro.service';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { rubroDTO, rubroRequestDTO } from '../models/rubro.model';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';

@Component({
  selector: 'app-lista-rubro',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './lista-rubro.component.html',
  providers:[
    { provide: GENERIC_SERVICE_TOKEN, useClass: RubroService }
  ]
})
export class ListaRubroComponent implements OnInit {

  private readonly rubroService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<rubroDTO, rubroRequestDTO>;
  rubroList: rubroDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.rubroService.getAll().subscribe({
      next: (response) => {
        this.rubroList = response as rubroDTO[];
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }
    })
  }

  }


