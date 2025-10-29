import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { tipoDireccionDTO, tipoDireccionRequestDTO } from "./models/tipoDireccion.model";

export interface ITipoDireccionService extends IServiceBase<tipoDireccionDTO, tipoDireccionRequestDTO>{}