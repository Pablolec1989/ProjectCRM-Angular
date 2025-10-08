import { IEntityBaseId, IEntityRequestBase } from "src/app/shared/interfaces/IEntityBase";

export interface condicionIvaDTO extends IEntityBaseId {
  // Hereda id: string y nombre: string de IEntityBaseId
}

export interface condicionIvaRequestDTO extends IEntityRequestBase {
  // Hereda nombre: string de IEntityRequestBase
}