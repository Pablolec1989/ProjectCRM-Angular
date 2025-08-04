import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { AreaDTO } from './interfaces/interface.area';

@Injectable({providedIn: 'root'})
export class AreaService {

  private http = inject(HttpClient);
  private urlBase = environment.ApiUrl + '/Areas';
  areas = signal<AreaDTO[]>([]);

  constructor() {
    this.GetAllArea();
  }

  public GetById(id: string) {
    return this.http.get<AreaDTO>(`${this.urlBase}/${id}`);
  }

  public GetAllArea() {
    return this.http.get<AreaDTO[]>(this.urlBase);
  };

  public PostArea(area: AreaDTO){
    return this.http.post<AreaDTO>(this.urlBase, area);
  }

  public PutAreas(id:string, area: AreaDTO) {
    return this.http.put<AreaDTO>(`${this.urlBase}/${id}`, area)
  }

  public DeleteArea(id: string){
    return this.http.delete(`${this.urlBase}/${id}`)
  }




}
