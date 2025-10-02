import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router, RouterLink } from "@angular/router";
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { AreaService } from "../area.service";
import { areaDTO } from "../models/areaDTO.model";
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-indice-area',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent,
    MatButtonModule,
    RouterLink,
    MatTableModule
],
  templateUrl: './indice-area.component.html',
})
export class IndiceAreaComponent
{
  private readonly serviceArea = inject(AreaService);
  private readonly router = inject(Router);
  areas!: areaDTO[];
  columnasAMostrar = ['nombre', 'acciones']

  constructor(){
    this.serviceArea.getAllAreas().subscribe({
      next: (areas) => {
        this.areas = areas;
      },
      error: (err) => {
        console.error('No se pudo obtener los datos', err);
      }
    });
  }

  eliminar(id: string) {
    this.serviceArea.deleteArea(id).subscribe({
      next: () => {
        this.areas = this.areas.filter(x => x.id !== id);
        this.router.navigate(['/areas/listado']);
      },
      error: (err) => {
        console.error('No se pudo eliminar el área', err);
      }
    });
  }

}
