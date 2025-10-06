import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit, Output } from '@angular/core';
import { FormAreaComponent } from "../form-area/form-area.component";
import { Router } from '@angular/router';
import { AreaService } from '../area.service';
import { areaDTO } from '../models/areaDTO.model';
import { areaRequestDTO } from '../models/areaRequestDTO';

@Component({
  selector: 'app-editar-area',
  standalone: true,
  imports: [
    CommonModule,
    FormAreaComponent
],
  templateUrl: './editar-area.component.html',
})
export class EditarAreaComponent {

  private readonly router = inject(Router);
  private readonly areaService = inject(AreaService);
  @Input() id!: string;
  area: areaDTO | undefined;

  ngOnInit(): void {
    this.areaService.getById(this.id).subscribe(area => {
      this.area = area;
    })
  }

  guardarCambios(area: areaRequestDTO) {
    this.areaService.put(this.id, area).subscribe({
      next: () => {
        this.router.navigate(['/areas']);
      },
      error: (err) => {
        console.error('No se pudo editar el area', err);
      }
    });
  }
}
