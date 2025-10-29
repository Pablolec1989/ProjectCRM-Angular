import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { USUARIO_SERVICE_TOKEN } from '../usuario.provider';
import { usuarioDTO, usuarioRequestDTO } from '../models/usuario.model';
import { Router } from '@angular/router';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { LoadingComponent } from "src/app/shared/loading/loading.component";
import { MostrarErroresComponent } from "src/app/shared/components/mostrar-errores/mostrar-errores.component";
import { FormUsuarioComponent } from "../form-usuario/form-usuario.component";
import { AREA_SERVICE_TOKEN } from '../../area/area.provider';
import { AreaService } from '../../area/area.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    MostrarErroresComponent,
    FormUsuarioComponent
],
  templateUrl: './editar-usuario.component.html',
    providers: [
    { provide: USUARIO_SERVICE_TOKEN, useClass: UsuarioService },
    { provide: AREA_SERVICE_TOKEN, useClass: AreaService }
  ]
})
export class EditarUsuarioComponent {

  private router = inject(Router);
  usuarioService = inject(USUARIO_SERVICE_TOKEN);
  errors: string[] = [];

  @Input() id!: string;
  @Input() usuario: usuarioDTO | undefined

  ngOnInit(): void {
    this.usuarioService.getById(this.id).subscribe((data) => this.usuario = data)
  }

  guardarCambios(usuario: usuarioRequestDTO)
  {
    this.usuarioService.put(this.id, usuario).subscribe({
      next: () => {
        this.router.navigate(['/usuario/listado'])
      },
      error: (err) => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;
      }
    })
    console.log(usuario);
  }

}
