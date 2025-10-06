import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TipoDireccionFormComponent } from "../tipoDireccion-form/tipoDireccion-form.component";
import { tipoDireccionRequestDTO } from '../models/tipoDireccionRequestDTO.model';
import { TipoDireccionService } from '../tipoDireccion.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-crear-tipo-direccion',
    imports: [
        CommonModule,
        TipoDireccionFormComponent
    ],
    templateUrl: './crear-tipoDireccion.component.html'
})
export class CrearTipoDireccionComponent
{
  titulo: string = 'Crear Tipo de Dirección';
  private readonly tipoDireccionService = inject(TipoDireccionService);
  private readonly router = inject(Router)

  guardarCambios(tipoDireccion: tipoDireccionRequestDTO)
  {
    this.tipoDireccionService.postTipoDireccion(tipoDireccion).subscribe({
      next: () => {
        this.router.navigate(['/tipo-direcciones/listado']);
      },
      error: (err) => {
        console.error('No se pudo crear el tipo de dirección', err);
      }
    })
  }
}
