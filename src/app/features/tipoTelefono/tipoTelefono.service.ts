import { Injectable } from '@angular/core';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { tipoTelefonoDTO } from './models/tipoTelefono.model';
import { tipoDireccionRequestDTO } from '../tipoDireccion/models/tipoDireccion.model';
import { ITipoTelefonoService } from './ITipoTelefonoService';

@Injectable({
  providedIn: 'root'
})
export class TipoTelefonoService extends ServiceBase<tipoTelefonoDTO, tipoDireccionRequestDTO>
implements ITipoTelefonoService {

  constructor() {
    super('tiposTelefonos')
  }

}
