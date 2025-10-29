import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { AreaService } from "../area.service";
import { areaDTO, areaRequestDTO } from '../models/area.model';
import { GENERIC_SERVICE_TOKEN } from "src/app/shared/components/povider/provider";
import { extractErrorsFromApi } from "src/app/shared/components/functions/extractErrorsFromAPI";
import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";

@Component({
    selector: 'app-listado-area',
    standalone: true,
    imports: [
        CommonModule,
        ListadoGenericoComponent,
        MatButtonModule
    ],
  templateUrl: './listado-area.component.html',
  providers:[{provide: GENERIC_SERVICE_TOKEN, useClass: AreaService}]
})
export class ListadoAreaComponent
{
  private readonly areaService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<areaDTO, areaRequestDTO>;
  areas: areaDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.areaService.getAll().subscribe({
      next: (areas) => {
        this.areas = areas;
      },
      error: (err) => {
        this.errors = err;
        extractErrorsFromApi(err);
      }
    });
  }


}
