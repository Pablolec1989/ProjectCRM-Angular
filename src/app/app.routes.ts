import { Routes } from '@angular/router';
<<<<<<< HEAD
import { CrearAreaComponent } from './features/area/crear-area/crear-area.component';
import { ListadoAreaComponent } from './features/area/lista-area/listado-area.component';
import { EditarAreaComponent } from './features/area/editar-area/editar-area.component';
import { IndiceAreaComponent } from './features/area/indice-area/indice-area.component';
import { CrearTipoDireccionComponent } from './features/tipoDireccion/crear-tipoDireccion/crear-tipoDireccion.component';
import { ListaTipoDireccionComponent } from './features/tipoDireccion/lista-tipoDireccion/lista-tipoDireccion.component';
import { IndiceTipoDireccionComponent } from './features/tipoDireccion/indice-tipoDireccion/indice-tipoDireccion.component';
import { EditarTipoDireccionComponent } from './features/tipoDireccion/editar-tipoDireccion/editar-tipoDireccion.component';
=======
import AreaComponent from './features/area/area.component';
import { AreaCreateComponent } from './features/area/area-create/area.create.component';
import { AreaUpdateComponent } from './features/area/area-update/area.update.component';
import { MenuComponent } from './menu/menu.component';
>>>>>>> 9a5b45a5345114dbe5707d953bf13a5744dd8e60

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
