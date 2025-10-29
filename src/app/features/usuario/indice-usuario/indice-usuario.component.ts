import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";
import { TablaColumna } from 'src/app/shared/components/models/tabla-columna';
import { UsuarioService } from '../usuario.service';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';

@Component({
  selector: 'app-indice-usuario',
  standalone: true,
  imports: [
    CommonModule,
    IndiceGenericoComponent
],
  templateUrl: './indice-usuario.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: UsuarioService }
  ]
})
export class IndiceUsuarioComponent {

  columnas: TablaColumna[] = [
    {
    key: 'nombre',
    header: 'Nombre'
    },
    {
      key: 'apellido',
      header: 'Apellido'
    }
  ]
}
