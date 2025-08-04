import { Routes } from '@angular/router';
import AreaComponent from './area/area.component';
import { AreaCreateComponent } from './area/area.create.component/area.create.component';
import { AreaUpdateComponent } from './area/area.update.component/area.update.component';

export const routes: Routes = [

  {
    path: 'areas', component: AreaComponent
  },
  {
    path:'areas/crear', component: AreaCreateComponent
  },
  {
    path:'areas/editar/:id', component: AreaUpdateComponent
  }

];
