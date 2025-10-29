import { Injectable } from '@angular/core';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';
import { condicionIvaDTO, condicionIvaRequestDTO } from './models/condicionIva.models';
import { ICondicionIvaService } from './ICondicionIvaService';

@Injectable({
  providedIn: 'root'
})
export class CondicionIvaService extends ServiceBase<condicionIvaDTO, condicionIvaRequestDTO> implements ICondicionIvaService {

  constructor() {
    super('CondicionIva');
  }

}
