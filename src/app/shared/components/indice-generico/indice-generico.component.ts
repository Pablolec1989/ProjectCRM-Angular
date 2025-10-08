import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { IServiceBase } from '../../interfaces/IServiceBase';
import Swal from 'sweetalert2';
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";
import { GENERIC_SERVICE_TOKEN } from '../povider/provider';
import { extractErrors } from '../functions/extractErrorsFromAPI';
import { TipoDireccionService } from 'src/app/features/tipoDireccion/tipoDireccion.service';

@Component({
    selector: 'app-indice-generico',
    imports: [
    CommonModule,
    ListadoGenericoComponent,
    CommonModule,
    ListadoGenericoComponent,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    MostrarErroresComponent
],
  templateUrl: './indice-generico.component.html',
  providers: [
    ]
})
export class IndiceGenericoComponent<TDTO, TRequestDTO> {

  private readonly genericService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<TDTO, TRequestDTO>;

  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaCrear!: string;
  @Input({ required: true }) rutaEditar!: string;
  @Input() columnasAMostrar: string[] = ['nombre', 'acciones'];
  entities!: TDTO[];
  errores: string[] = [];

  constructor() {
    this.loadData();
  }

  loadData() {
    this.genericService.getAll().subscribe({
      next: (data: TDTO[]) => {
        this.entities = data;
      },
      error: error => {
        const errores = extractErrors(error);
        this.errores = errores;
      }
    })

  }

  confirmarEliminacion(id: string): void {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro que deseas borrar el registro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.genericService.delete(id).subscribe({
          next: () => {
            Swal.fire('Eliminado', 'El registro ha sido eliminado correctamente.', 'success');
            this.loadData();
          },
          error: (err) => {
            Swal.fire('Error', 'No se pudo eliminar el registro.', 'error');
            this.errores=err;
          },
        });
      }
    });
  }

}
