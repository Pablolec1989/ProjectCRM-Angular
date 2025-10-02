import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { areaRequestDTO } from '../models/areaRequestDTO';
import { AreaService } from '../area.service';
import { FormAreaComponent } from "../form-area/form-area.component";

@Component({
  selector: 'app-crear-area',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    FormAreaComponent
],
  templateUrl: './crear-area.component.html',
})
export class CrearAreaComponent
{
  titulo = 'Crear Área';
  private router = inject(Router);
  private readonly serviceArea = inject(AreaService);

  guardarCambios(area: areaRequestDTO) {
    this.serviceArea.postArea(area).subscribe({
      next: () => {
        this.router.navigate(['/areas/listado']);
      },
      error: (err) => {
        console.error('No se pudo crear el area', err);
      }
    });
  }
}
