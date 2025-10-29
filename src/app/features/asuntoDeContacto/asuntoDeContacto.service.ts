import { Injectable } from '@angular/core';
import { asuntoDeContactoDTO, asuntoDeContactoRequestDTO } from './models/asuntoDeContacto.model';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';

@Injectable({
  providedIn: 'root'
})
export class AsuntoDeContactoService extends ServiceBase<asuntoDeContactoDTO, asuntoDeContactoRequestDTO> {

  constructor() {
    super('AsuntoDeContacto');
  }

}
