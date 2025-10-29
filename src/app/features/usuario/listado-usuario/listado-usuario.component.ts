import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "src/app/shared/components/listado-generico/listado-generico.component";
import { usuarioDTO } from '../models/usuario.model';
import { USUARIO_SERVICE_TOKEN } from '../usuario.provider';
import { IUsuarioService } from '../IUsuarioService';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuario',
  standalone: true,
  imports: [
    CommonModule,
    ListadoGenericoComponent
],
  templateUrl: './listado-usuario.component.html',
  providers: [
    { provide: USUARIO_SERVICE_TOKEN, useClass: UsuarioService }
  ]
})
export class ListaUsuarioComponent implements OnInit {

  usuarioService = inject(USUARIO_SERVICE_TOKEN);
  usuarios: usuarioDTO[] = [];
  errors: string[] =[];

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe({
      next: (response) => {
        this.usuarios = response;
      },
      error: (err) => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;
      }
    })

  }


}
