import { Injectable } from '@angular/core';
import { rolDTO, rolRequestDTO } from './rol.model';
import { ServiceBase } from 'src/app/shared/ServiceBase.service';

@Injectable({
  providedIn: 'root'
})
export class RolService extends ServiceBase<rolDTO, rolRequestDTO> {

  constructor() {
    super("Roles");
  }

}
