import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { tipoDireccionDTO } from '../models/tipoDireccionDTO.model';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { TipoDireccionService } from '../tipoDireccion.service';

@Component({
    selector: 'app-indice-tipo-direccion',
    imports: [
        CommonModule,
        ListadoGenericoComponent,
        MatButtonModule,
        RouterLink,
        MatTableModule
    ],
    templateUrl: './indice-tipoDireccion.component.html'
})
export class IndiceTipoDireccionComponent implements OnInit {

  private readonly tipoDireccionService = inject(TipoDireccionService);

  tiposDirecciones: tipoDireccionDTO[] = [];
  columnasAMostrar: string[] = ['nombre', 'acciones']

  ngOnInit() {
    this.tipoDireccionService.getAllTipoDireccion().subscribe({
      next: (tiposDirecciones) => {
        this.tiposDirecciones = tiposDirecciones;
      },
      error: (err) => {
        console.error('No se pudo obtener los datos', err);
      }
    });
  }

  eliminar(id: string)
  {
    this.tipoDireccionService.deleteTipoDireccion(id);
  }


}
