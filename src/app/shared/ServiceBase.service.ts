import { environment } from './../../environments/environment';
import { inject, Injectable, TypeDecorator } from '@angular/core';
import { IServiceBase } from './interfaces/IServiceBase';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceBase<TDTO, TRequestDTO> implements IServiceBase<TDTO, TRequestDTO> {

  private readonly http = inject(HttpClient);
  private fullBaseUrl: string;

  constructor(baseUrl: string) {
    this.fullBaseUrl = `${environment.ApiUrl}/${baseUrl}`;
  }

  getById(id: string): Observable<TDTO> {
    return this.http.get<TDTO>(`${this.fullBaseUrl}/${id}`);
  }
  getAll(): Observable<TDTO[]> {
    return this.http.get<TDTO[]>(this.fullBaseUrl);
  }
  put(id: string, entity: TRequestDTO): Observable<any> {
    return this.http.put(`${this.fullBaseUrl}/${id}`, entity);
  }
  post(entity: TRequestDTO): Observable<any> {
    return this.http.post(this.fullBaseUrl, entity);
  }
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.fullBaseUrl}/${id}`);
  }

}
