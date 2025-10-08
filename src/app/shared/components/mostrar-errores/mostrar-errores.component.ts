import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-errores',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mostrar-errores.component.html',
})
export class MostrarErroresComponent {

  @Input({ required: true }) errores!: string[];
}
