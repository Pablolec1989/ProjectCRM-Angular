import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-indice-rol',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-rol.component.html',
  providers: [{ provide: GENERIC_SERVICE_TOKEN, useClass: RolService }]
})
export class IndiceRolComponent { }
