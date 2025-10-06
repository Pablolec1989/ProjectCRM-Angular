import { Observable } from "rxjs";
import { areaDTO } from './models/areaDTO.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { areaRequestDTO } from "./models/areaRequestDTO";
import { IServicioCRUD } from "src/app/shared/interfaces/IServiceBase";

@Injectable({
  providedIn: 'root'
})
export class AreaService implements IServicioCRUD<areaDTO, areaRequestDTO> {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.ApiUrl + '/Areas';


  getById(id: string): Observable<areaDTO> {
    return this.http.get<areaDTO>(`${this.apiUrl}/${id}`);
  }
  getAll(): Observable<areaDTO[]> {
    return this.http.get<areaDTO[]>(environment.ApiUrl + '/Areas');
  }
  put(id: string, entity: areaRequestDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, entity);
  }
  post(entity: areaRequestDTO): Observable<any> {
    return this.http.post(this.apiUrl, entity);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
