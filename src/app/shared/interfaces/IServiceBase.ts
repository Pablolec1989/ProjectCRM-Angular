import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";

export interface IServicioCRUD<TDTO, TRequestDTO>{
    getById(id: number):Observable<TDTO>;
    put(id: number, entidad: TRequestDTO): Observable<any>;
    post(entidad: TRequestDTO): Observable<any>;
    delete(id:string): Observable<any>;
}