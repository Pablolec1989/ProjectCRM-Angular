import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { tipoTelefonoDTO, tipoTelefonoRequestDTO } from "./models/tipoTelefono.model";

export interface ITipoTelefonoService extends IServiceBase<tipoTelefonoDTO, tipoTelefonoRequestDTO>{}