import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { usuarioDetailDTO, usuarioDTO, usuarioRequestDTO } from "./models/usuario.model";
import { Observable } from "rxjs";

export interface IUsuarioService extends IServiceBase<usuarioDTO, usuarioRequestDTO>{

    getUsuarioDetailDTO(id: string): Observable<usuarioDetailDTO>;
}