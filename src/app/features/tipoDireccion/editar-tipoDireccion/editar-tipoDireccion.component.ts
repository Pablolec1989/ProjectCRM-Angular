import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { TipoDireccionFormComponent } from "../tipoDireccion-form/tipoDireccion-form.component";
import { tipoDireccionDTO } from '../models/tipoDireccionDTO.model';
import { TipoDireccionService } from '../tipoDireccion.service';
import { Router } from '@angular/router';
import { tipoDireccionRequestDTO } from '../models/tipoDireccionRequestDTO.model';

@Component({
  selector: 'app-editar-tipo-direccion',
  standalone: true,
  imports: [
    CommonModule,
    TipoDireccionFormComponent
],
  templateUrl: './editar-tipoDireccion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditarTipoDireccionComponent implements OnInit
{
  private readonly tipoDireccionService = inject(TipoDireccionService);
  private readonly router = inject(Router);
  tipoDireccion: tipoDireccionDTO | undefined;
  @Input() id!: string;

  ngOnInit(): void {
    this.tipoDireccionService.getTipoDireccionById(this.id).subscribe(tipoDireccion => {
      this.tipoDireccion = tipoDireccion;
    });
  }

    guardarCambios(tipoDireccion:tipoDireccionRequestDTO){
      this.tipoDireccionService.putTipoDireccion(this.id, tipoDireccion).subscribe({
        next: () => {
          this.router.navigate(['/tipoDireccion/listado']);
        },
        error: (err) => {
          console.error('No se pudo editar el tipo de dirección', err);
        }
      });
    }


}
