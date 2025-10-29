import { areaDTO } from "../../area/models/area.model";

export interface usuarioDTO {
  id: string;
  nombre: string;
  apellido: string;
  area: areaDTO;
}

export interface usuarioRequestDTO {
  nombre: string;
  apellido: string;
  areaId: string;
}

export interface usuarioDetailDTO extends usuarioDTO {
 //...
}

