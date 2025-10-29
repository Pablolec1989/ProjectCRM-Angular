import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormUsuarioComponent } from '../form-usuario/form-usuario.component';
import { UsuarioService } from '../usuario.service';
import { USUARIO_SERVICE_TOKEN } from '../usuario.provider';
import { Router } from '@angular/router';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { usuarioRequestDTO } from '../models/usuario.model';
import { MostrarErroresComponent } from "src/app/shared/components/mostrar-errores/mostrar-errores.component";
import { AREA_SERVICE_TOKEN } from '../../area/area.provider';
import { AreaService } from '../../area/area.service';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    CommonModule,
    MostrarErroresComponent,
    FormUsuarioComponent
],
  templateUrl: './crear-usuario.component.html',
  providers: [
    { provide: USUARIO_SERVICE_TOKEN, useClass: UsuarioService },
    { provide: AREA_SERVICE_TOKEN, useClass: AreaService }
  ]
})
export class CrearUsuarioComponent {

  private router = inject(Router);
  usuarioService = inject(USUARIO_SERVICE_TOKEN);
  errors: string[] = [];

  guardarCambios(usuario: usuarioRequestDTO) {
    this.usuarioService.post(usuario).subscribe({
      next: () => {
        console.log(usuario)
        this.router.navigate(['/usuario/listado']);
      },
      error: (err) => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;

        }

    })
  }



}
