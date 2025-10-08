import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IEntityBaseId } from '../../interfaces/IEntityBase';

@Component({
  selector: 'app-listado-generico',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listado-generico.component.html',
})

export class ListadoGenericoComponent<TDTO extends IEntityBaseId> {

  @Input({required:true}) listado: any;
}
