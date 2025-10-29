import { IEntityBaseId } from "src/app/shared/interfaces/IEntityBase";

export interface rolDTO extends IEntityBaseId {

}

export interface rolRequestDTO {
  id: string;
  nombre: string;

}