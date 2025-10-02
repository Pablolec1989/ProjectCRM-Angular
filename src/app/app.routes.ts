import { Routes } from '@angular/router';
import { CrearAreaComponent } from './features/area/crear-area/crear-area.component';
import { ListadoAreaComponent } from './features/area/lista-area/listado-area.component';
import { EditarAreaComponent } from './features/area/editar-area/editar-area.component';
import { IndiceAreaComponent } from './features/area/indice-area/indice-area.component';
import { CrearTipoDireccionComponent } from './features/tipoDireccion/crear-tipoDireccion/crear-tipoDireccion.component';
import { ListaTipoDireccionComponent } from './features/tipoDireccion/lista-tipoDireccion/lista-tipoDireccion.component';
import { IndiceTipoDireccionComponent } from './features/tipoDireccion/indice-tipoDireccion/indice-tipoDireccion.component';
import { EditarTipoDireccionComponent } from './features/tipoDireccion/editar-tipoDireccion/editar-tipoDireccion.component';

export const routes: Routes = [
  {
    path: 'areas', component: ListadoAreaComponent
  },
  {
    path:'areas/listado', component: IndiceAreaComponent
  },
  {
    path:'areas/crear', component: CrearAreaComponent
  },
  {
    path:'areas/editar/:id', component: EditarAreaComponent
  },
  {
    path:'tipoDireccion', component: ListaTipoDireccionComponent
  },
  {
    path:'tipoDireccion/listado', component: IndiceTipoDireccionComponent
  },
  {
    path:'tipoDireccion/crear', component: CrearTipoDireccionComponent
  },
  {
    path:'tipoDireccion/editar', component: EditarTipoDireccionComponent
  },


];
