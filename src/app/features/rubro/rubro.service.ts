import { Injectable } from '@angular/core';
import { rubroDTO, rubroRequestDTO } from './models/rubro.model';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';

@Injectable({
  providedIn: 'root'
})
export class RubroService extends ServiceBase<rubroDTO, rubroRequestDTO> {

  constructor() {
    super('Rubros')
}

}
