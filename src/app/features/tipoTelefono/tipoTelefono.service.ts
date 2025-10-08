import { Injectable } from '@angular/core';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { tipoTelefonoDTO } from './models/tipoTelefono.model';
import { tipoDireccionRequestDTO } from '../tipoDireccion/models/tipoDireccion.model';

@Injectable({
  providedIn: 'root'
})
export class TipoTelefonoService extends ServiceBase<tipoTelefonoDTO, tipoDireccionRequestDTO> {

  constructor() {
    super('tiposTelefonos')
  }

}
