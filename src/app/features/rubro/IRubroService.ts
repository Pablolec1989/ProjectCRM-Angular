import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { rubroDTO, rubroRequestDTO } from "./models/rubro.model";

export interface IRubroService extends IServiceBase<rubroDTO, rubroRequestDTO>{}