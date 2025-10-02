import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { Observable } from 'rxjs';
import { tipoDireccionDTO } from './models/tipoDireccionDTO.model'// Adjust the path as necessary
import { tipoDireccionRequestDTO } from './models/tipoDireccionRequestDTO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDireccionService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.ApiUrl;

  getTipoDireccionById(id: string): Observable<tipoDireccionDTO>
  {
    return this.http.get<tipoDireccionDTO>(`${this.apiUrl}/TiposDirecciones/${id}`);
  }

  getAllTipoDireccion() : Observable<tipoDireccionDTO[]>
  {
    return this.http.get<tipoDireccionDTO[]>(`${this.apiUrl}/TiposDirecciones`);
  }

  postTipoDireccion(tipoDireccion: tipoDireccionRequestDTO) : Observable<tipoDireccionDTO>
  {
    return this.http.post<tipoDireccionDTO>(`${this.apiUrl}/TiposDirecciones`, tipoDireccion);
  }
  putTipoDireccion(id : string, tipoDireccion: tipoDireccionRequestDTO) : Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}/TiposDirecciones/${id}`, tipoDireccion);
  }

  deleteTipoDireccion(id: string) : void
  {
    this.http.delete(`${this.apiUrl}/TiposDirecciones/${id}`);
  }


}
