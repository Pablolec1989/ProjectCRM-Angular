import { IServiceBase } from "src/app/shared/interfaces/IServiceBase";
import { areaDTO, areaRequestDTO } from "./models/area.model";

export interface IAreaService extends IServiceBase<areaDTO, areaRequestDTO>{}
