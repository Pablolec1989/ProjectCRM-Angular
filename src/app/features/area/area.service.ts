import { Injectable } from '@angular/core';
import { areaDTO, areaRequestDTO } from "./models/area.model";
import { ServiceBase } from "src/app/shared/ServiceBase.service";

@Injectable({
  providedIn: 'root'
})
export class AreaService extends ServiceBase<areaDTO, areaRequestDTO> {

  constructor() {
    super("Areas");
  }

}
