import { Routes } from '@angular/router';
import AreaComponent from './features/area/area.component';
import { AreaCreateComponent } from './features/area/area-create/area.create.component';
import { AreaUpdateComponent } from './features/area/area-update/area.update.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [

  {
    path: 'areas', component: AreaComponent
  },
  {
    path:'areas/crear', component: AreaCreateComponent
  },
  {
    path:'areas/editar/:id', component: AreaUpdateComponent
  },

];
