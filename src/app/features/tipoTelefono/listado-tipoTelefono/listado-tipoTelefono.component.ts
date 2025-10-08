import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { TipoTelefonoService } from '../tipoTelefono.service';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { extractErrors } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { tipoTelefonoDTO } from '../models/tipoTelefono.model';

@Component({
  selector: 'app-listado-tipo-telefono',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './listado-tipoTelefono.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: TipoTelefonoService }
  ]
})
export class ListadoTipoTelefonoComponent implements OnInit {

  private readonly serviceBase = inject(TipoTelefonoService);
  tiposTelefonosList: tipoTelefonoDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.serviceBase.getAll().subscribe({
      next: (response) => {
        this.tiposTelefonosList = response as tipoTelefonoDTO[];
      },
      error: (err) => { 
        this.errors = err;
        extractErrors(err);

      }
    })
  } 


}
