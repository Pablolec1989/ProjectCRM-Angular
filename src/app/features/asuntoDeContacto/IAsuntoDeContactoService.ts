import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { asuntoDeContactoDTO, asuntoDeContactoRequestDTO } from "./models/asuntoDeContacto.model";

export interface IAsuntoDeContactoService extends IServiceBase<asuntoDeContactoDTO, asuntoDeContactoRequestDTO> {}