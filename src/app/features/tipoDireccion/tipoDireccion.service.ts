import { Injectable } from '@angular/core';
import { tipoDireccionDTO, tipoDireccionRequestDTO } from './models/tipoDireccion.model'// Adjust the path as necessary
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { ITipoDireccionService } from './ITipoDireccionService';

@Injectable({
  providedIn: 'root'
})
export class TipoDireccionService extends ServiceBase<tipoDireccionDTO, tipoDireccionRequestDTO> implements ITipoDireccionService {

  constructor() {
    super("TiposDirecciones");
  }

}
