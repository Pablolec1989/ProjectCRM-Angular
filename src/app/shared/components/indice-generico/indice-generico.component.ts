import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { GENERIC_SERVICE_TOKEN } from '../povider/provider';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { IServicioCRUD } from '../../interfaces/IServiceBase';
import Swal from 'sweetalert2';

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
    ],
    templateUrl: './indice-generico.component.html'
})
export class IndiceGenericoComponent<TDTO, TRequestDTO> implements OnInit {

  private readonly genericService = inject(GENERIC_SERVICE_TOKEN) as IServicioCRUD<TDTO, TRequestDTO>;

  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaCrear!: string;
  @Input({ required: true }) rutaEditar!: string;
  @Input() columnasAMostrar: string[] = ['nombre', 'acciones'];
  entities!: TDTO[];

  ngOnInit(): void {
    this.genericService.getAll().subscribe({
      next: (response: TDTO[]) => {
        this.entities = response;
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
      }
    });
  }
  confirmarEliminacion(id: string): void {
    Swal.fire({
      title: 'Confirmación',
      text: 'Estas seguro que deseas borrar el registro',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if(result.isConfirmed){
      this.genericService.delete(id);
    }
  });
}

}
