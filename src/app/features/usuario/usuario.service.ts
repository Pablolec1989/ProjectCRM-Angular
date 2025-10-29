import { inject, Injectable } from '@angular/core';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { usuarioDetailDTO, usuarioDTO, usuarioRequestDTO } from './models/usuario.model';
import { IUsuarioService } from './IUsuarioService';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends ServiceBase<usuarioDTO, usuarioRequestDTO>
implements IUsuarioService{

  private readonly httpClient = inject(HttpClient);

  constructor() {
    super('Usuarios')
  }

  getUsuarioDetailDTO(id: string): Observable<usuarioDetailDTO> {
    return this.httpClient.get<usuarioDetailDTO>(`${environment.ApiUrl}/Usuarios/detail/{id}`);
  }

}
