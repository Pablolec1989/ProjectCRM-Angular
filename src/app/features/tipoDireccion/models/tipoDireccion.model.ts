import { IEntityBaseId, IEntityRequestBase } from "src/app/shared/interfaces/IEntityBase";

export interface tipoDireccionDTO extends IEntityBaseId {
  // Hereda id: string y nombre: string de IEntityBaseId
}

export interface tipoDireccionRequestDTO extends IEntityRequestBase {
    // Hereda nombre: string de IEntityRequestBase
}