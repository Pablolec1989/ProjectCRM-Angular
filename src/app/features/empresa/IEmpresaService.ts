import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { empresaDTO, empresaRequestDTO, empresaDetailDTO } from './models/empresa.model';
import { Observable } from "rxjs";

export interface IEmpresaService extends IServiceBase<empresaDTO, empresaRequestDTO> { 

  getEmpresaDetailDTO(id: string): Observable<empresaDetailDTO>;
}
