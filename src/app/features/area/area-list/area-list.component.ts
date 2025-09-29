import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AreaService } from '../area.service';
import { AreaDTO } from '../../../models/areaDTO.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'area-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterLink],
  styleUrls: ['./area.list.component.css'],
  templateUrl: './area.list.component.html',
})
export class AreaListComponent {
  areaService = inject(AreaService);
  columnasAMostrar: string[] = ['nombre', 'acciones'];

  constructor() {
    this.areaService.GetAllArea();
  }
  areas = computed(() => this.areaService.areas());

  eliminarArea(id: string) {
    this.areaService.DeleteArea(id);
  }
}
