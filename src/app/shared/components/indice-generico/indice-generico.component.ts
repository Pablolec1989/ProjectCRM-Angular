import { CommonModule } from '@angular/common';
import { Component, inject, InjectionToken, Injector, Input, OnInit, Type } from '@angular/core';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { IServiceBase } from '../../interfaces/IServiceBase';
import Swal from 'sweetalert2';
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";
import { GENERIC_SERVICE_TOKEN } from '../povider/provider';
import { extractErrorsFromApi } from '../functions/extractErrorsFromAPI';
import { TablaColumna } from '../models/tabla-columna';
import { ServiceBase } from '../../ServiceBase.service';

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
export class IndiceGenericoComponent<TDTO, TRequestDTO> implements OnInit {

  private genericService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<TDTO, TRequestDTO>;
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaCrear!: string;
  @Input({ required: true }) rutaEditar!: string;
  @Input() columnas: TablaColumna[] = [];
  entities!: TDTO[];
  errors: string[] = [];

  ngOnInit(){
    this.loadData();
  }

  loadData() {
    this.genericService.getAll().subscribe({
      next: (data: TDTO[]) => {
        this.entities = data;
      },
      error: error => {
        const errores = extractErrorsFromApi(error);
        this.errors = errores;
      }
    })
  }

  get columnasAMostrar(): string[] {
    return [...this.columnasDefinidas.map(c => c.key), 'acciones'];
  }

  get columnasDefinidas(): TablaColumna[] {
  return (this.columnas && this.columnas.length > 0)
    ? this.columnas
    : TablaColumna.default();
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
            this.errors=err;
          },
        });
      }
    });
  }

}
