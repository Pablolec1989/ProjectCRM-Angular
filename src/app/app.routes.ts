import { CrearAreaComponent } from './features/area/crear-area/crear-area.component';
import { ListadoAreaComponent } from './features/area/lista-area/listado-area.component';
import { EditarAreaComponent } from './features/area/editar-area/editar-area.component';
import { IndiceAreaComponent } from './features/area/indice-area/indice-area.component';
import { CrearTipoDireccionComponent } from './features/tipoDireccion/crear-tipoDireccion/crear-tipoDireccion.component';
import { ListaTipoDireccionComponent } from './features/tipoDireccion/lista-tipoDireccion/lista-tipoDireccion.component';
import { IndiceTipoDireccionComponent } from './features/tipoDireccion/indice-tipoDireccion/indice-tipoDireccion.component';
import { EditarTipoDireccionComponent } from './features/tipoDireccion/editar-tipoDireccion/editar-tipoDireccion.component';
import { Routes } from '@angular/router';
import { ListaCondicionIvaComponent } from './features/condicionIva/lista-condicionIva/lista-condicionIva.component';
import { IndiceCondicionIvaComponent } from './features/condicionIva/indice-condicionIva/indice-condicionIva.component';
import { CrearCondicionIvaComponent } from './features/condicionIva/crear-condicionIva/crear-condicionIva.component';
import { EditarCondicionIvaComponent } from './features/condicionIva/editar-condicionIva/editar-condicionIva.component';
import { ListadoTipoTelefonoComponent } from './features/tipoTelefono/listado-tipoTelefono/listado-tipoTelefono.component';
import { IndiceTipoTelefonoComponent } from './features/tipoTelefono/indice-tipoTelefono/indice-tipoTelefono.component';
import { CrearTipoTelefonoComponent } from './features/tipoTelefono/crear-tipoTelefono/crear-tipoTelefono.component';
import { EditarTipoTelefonoComponent } from './features/tipoTelefono/editar-tipoTelefono/editar-tipoTelefono.component';

export const routes: Routes = [
  {
    path: 'areas',
    children: [
      { path: '', component: ListadoAreaComponent },
      { path: 'listado', component: IndiceAreaComponent },
      { path: 'crear', component: CrearAreaComponent },
      { path: 'editar/:id', component: EditarAreaComponent }
    ]
  },
  {
    path: 'tipoDireccion',
    children: [
      { path: '', component: ListaTipoDireccionComponent },
      { path: 'listado', component: IndiceTipoDireccionComponent },
      { path: 'crear', component: CrearTipoDireccionComponent },
      { path: 'editar/:id', component: EditarTipoDireccionComponent }
    ]
  },
  {
    path: 'condicionIva',
    children: [
      { path: '', component: ListaCondicionIvaComponent },
      { path: 'listado', component: IndiceCondicionIvaComponent },
      { path: 'crear', component: CrearCondicionIvaComponent },
      { path: 'editar/:id', component: EditarCondicionIvaComponent }
    ]
  },
  {
    path: 'tiposTelefono',
    children: [
      {path: '', component: ListadoTipoTelefonoComponent},
      {path: 'listado', component: IndiceTipoTelefonoComponent},
      {path: 'crear', component: CrearTipoTelefonoComponent},
      {path: 'editar/:id', component: EditarTipoTelefonoComponent},
    ]
  }

];
