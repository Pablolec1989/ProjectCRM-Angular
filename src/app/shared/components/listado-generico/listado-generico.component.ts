import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './listado-generico.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoGenericoComponent
{
  @Input({required:true}) listado: any[] = [];
}
