import { Observable } from "rxjs";

export interface IServiceBase<TDTO, TRequestDTO>{

  getById(id: string): Observable<TDTO>;
  getAll(): Observable<TDTO[]>;
  put(id: string, entity: TRequestDTO): Observable<any>;
  post(entity: TRequestDTO): Observable<any>;
  delete(id: string): Observable<any>;

}