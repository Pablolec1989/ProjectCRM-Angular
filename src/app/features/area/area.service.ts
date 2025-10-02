import { Observable } from "rxjs";
import { areaDTO } from './models/areaDTO.model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';
import { areaRequestDTO } from "./models/areaRequestDTO";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.ApiUrl;

  getAreaById(id: string): Observable<areaDTO> {
    return this.http.get<areaDTO>(`${this.apiUrl}/Areas/${id}`);
  }

  getAllAreas(): Observable<areaDTO[]> {
    return this.http.get<areaDTO[]>(`${this.apiUrl}/Areas`);
  }

  postArea(areaRequest: areaRequestDTO): Observable<any>
  {
    return this.http.post(`${this.apiUrl}/Areas`, areaRequest);
  }

  putArea(id: string, areaRequest: areaRequestDTO) : Observable<any>
  {
    return this.http.put(`${this.apiUrl}/Areas/${id}`, areaRequest);
  }

  deleteArea(id: string): Observable<any>
  {
    return this.http.delete<void>(`${this.apiUrl}/Areas/${id}`);
  }
}
