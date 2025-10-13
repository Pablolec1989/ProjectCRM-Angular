import { inject, Injectable } from '@angular/core';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { empresaDetailDTO, empresaDTO, empresaRequestDTO } from './models/empresa.model';
import { IEmpresaService } from './IEmpresaService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService
  extends ServiceBase<empresaDTO, empresaRequestDTO>
  implements IEmpresaService {

  private readonly httpClient = inject(HttpClient);
  
  constructor() {
    super('Empresa')
  }

  getEmpresaDetailDTO(id: string): Observable<empresaDetailDTO> {
    return this.httpClient.get<empresaDetailDTO>(`${environment.ApiUrl}/Empresa/detail/${id}`);
  }

}
