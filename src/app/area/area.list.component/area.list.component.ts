import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, inject, computed } from "@angular/core";
import { AreaService } from "../area.service";
import { AreaDTO } from "../interfaces/interface.area";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'area-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterLink
  ],
  styleUrls: ['./area.list.component.css'],
  templateUrl: './area.list.component.html',
})

export class AreaListComponent{

  areaService = inject(AreaService);
  public columnasAMostrar: string[] = ["nombre","acciones"];

  public areas = computed<AreaDTO[]>(() => {
    return this.areaService.areas();
  });


  constructor() {
  }

}

