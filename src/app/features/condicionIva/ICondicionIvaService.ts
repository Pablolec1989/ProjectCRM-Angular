import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { condicionIvaDTO, condicionIvaRequestDTO } from "./models/condicionIva.models";

export interface ICondicionIvaService extends IServiceBase<condicionIvaDTO, condicionIvaRequestDTO>{}