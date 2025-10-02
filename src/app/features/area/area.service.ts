<<<<<<< HEAD
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
=======
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { AreaDTO } from '../../models/areaDTO.model';

@Injectable({ providedIn: 'root' })
export class AreaService {
  private http = inject(HttpClient);
  private urlBase = environment.ApiUrl + '/Areas';
  areas = signal<AreaDTO[]>([]);

  constructor() {
    this.GetAllArea().subscribe((areas) => {
      this.areas.set(areas);
    });
  }

  public GetById(id: string) {
    return this.http.get<AreaDTO>(`${this.urlBase}/${id}`);
  }

  public GetAllArea() {
    return this.http.get<AreaDTO[]>(this.urlBase);
  }

  public PostArea(area: AreaDTO) {
    return this.http.post<AreaDTO>(this.urlBase, area).subscribe(() => {});
  }

  public PutArea(id: string, area: AreaDTO) {
    return this.http
      .put<AreaDTO>(`${this.urlBase}/${id}`, area)
      .subscribe(() => {});
  }

  public DeleteArea(id: string) {
    return this.http.delete(`${this.urlBase}/${id}`).subscribe(() => {
      this.areas.set(this.areas().filter((a) => a.id !== id));
    });
>>>>>>> 9a5b45a5345114dbe5707d953bf13a5744dd8e60
  }
}
