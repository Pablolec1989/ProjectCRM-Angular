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
    this.GetAllAreas();
  }

  GetAllAreas() {
    return this.http.get<AreaDTO[]>(this.urlBase).subscribe((areas: AreaDTO[]) => {
      this.areas.set(areas);
      console.log('Areas obtenidas:', areas);
    });
  }

  PostAreas(area: AreaDTO){
    return this.http.post<AreaDTO>(this.urlBase, area);
  }



}
