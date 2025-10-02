import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { AreaService } from "../area.service";
import { areaDTO } from "../models/areaDTO.model";

@Component({
  selector: 'app-listado-area',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent,
    MatButtonModule
],
  templateUrl: './listado-area.component.html',
})
export class ListadoAreaComponent implements OnInit
{
  private readonly areaService = inject(AreaService);
  private readonly router = inject(Router);
  listadoAreas: areaDTO[] = [];

  ngOnInit(): void {
    this.areaService.getAllAreas().subscribe({
      next: (areas) => {
        this.listadoAreas = areas;
      },
      error: (err) => {
        console.error('No se pudo obtener los datos', err);
      }
    });
  }

  agregarArea(){
    this.router.navigate(['/areas/crear']);
  }


}
