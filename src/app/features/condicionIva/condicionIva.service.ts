import { Injectable } from '@angular/core';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { condicionIvaDTO, condicionIvaRequestDTO } from './models/condicionIva.models';

@Injectable({
  providedIn: 'root'
})
export class CondicionIvaService extends ServiceBase<condicionIvaDTO, condicionIvaRequestDTO> {

  constructor() {
    super('CondicionIva');
  }

}
