import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { AreaService } from "../area.service";
import { areaDTO } from '../models/area.model';
import { GENERIC_SERVICE_TOKEN } from "src/app/shared/components/povider/provider";
import { extractErrors } from "src/app/shared/components/functions/extractErrorsFromAPI";

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
  private readonly tipoDireccionService = inject(AreaService)
  areas: areaDTO[] = [];
  errors: string[] = [];

  ngOnInit(): void {
    this.tipoDireccionService.getAll().subscribe({
      next: (areas) => {
        this.areas = areas;
      },
      error: (err) => {
        this.errors = err;
        extractErrors(err);
      }
    });
  }


}
