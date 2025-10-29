import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AreaService } from '../../area/area.service';
import { ROL_SERVICE_TOKEN } from '../rol.provider';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { rolDTO, rolRequestDTO } from '../rol.model';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { RolService } from '../rol.service';

@Component({
  selector: 'app-lista-rol',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './lista-rol.component.html',
  providers: [{ provide: GENERIC_SERVICE_TOKEN, useClass: RolService }]
})
export class ListaRolComponent implements OnInit {

  private readonly rolService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<rolDTO, rolRequestDTO>;
  roles: rolDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.rolService.getAll().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }
    });
  }


}
