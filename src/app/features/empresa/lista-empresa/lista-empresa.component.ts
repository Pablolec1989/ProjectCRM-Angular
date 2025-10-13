import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { EmpresaService } from '../empresa.service';
import { empresaDTO, empresaRequestDTO } from '../models/empresa.model';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';

@Component({
  selector: 'app-lista-empresa',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './lista-empresa.component.html',
  providers: [
    {provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService }
  ]
})
export class ListaEmpresaComponent implements OnInit {
  
  private readonly empresaService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<empresaDTO, empresaRequestDTO>;
  empresasList: empresaDTO[] = [];
  errors: string[] = [];
  
  ngOnInit(): void {
    this.empresaService.getAll().subscribe({
      next: (response) => {
        console.log(response);
        this.empresasList = response;
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }  
    })
  }
  
}
