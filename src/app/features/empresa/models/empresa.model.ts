import { condicionIvaDTO } from "../../condicionIva/models/condicionIva.models";
import { rubroDTO } from "../../rubro/models/rubro.model";

export interface empresaDTO {
  id: string;
  razonSocial: string;
}

export interface empresaRequestDTO {
  razonSocial: string;
  cuit?: string;
  rubroId: string;
  condicionIvaId: string;
}

export interface empresaDetailDTO extends empresaDTO {
  cuit?: string;
  rubro: rubroDTO;
  condicionIva: condicionIvaDTO;
};


