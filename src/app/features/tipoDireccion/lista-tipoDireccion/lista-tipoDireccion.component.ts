import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { tipoDireccionDTO } from '../models/tipoDireccionDTO.model';
import { TipoDireccionService } from '../tipoDireccion.service';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-lista-tipo-direccion',
    imports: [
        CommonModule,
        ListadoGenericoComponent,
        MatButtonModule
    ],
    templateUrl: './lista-tipoDireccion.component.html'
})
export class ListaTipoDireccionComponent implements OnInit
{
  private readonly router = inject(Router);
  private readonly tipoDireccionService = inject(TipoDireccionService)
  tiposDirecciones: tipoDireccionDTO[] = [];

  ngOnInit(): void {
    this.tipoDireccionService.getAllTipoDireccion().subscribe({
      next: (tiposDirecciones) => {
        this.tiposDirecciones = tiposDirecciones;
      },
      error: (err) => {
        console.error('No se pudo obtener los datos', err);
      }
    });
  }

    agregarTipoDireccion() {
      this.router.navigate(['/tipoDireccion/crear'])
    };


  }

