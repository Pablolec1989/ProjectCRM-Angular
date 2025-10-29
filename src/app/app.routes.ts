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
import { ListaRubroComponent } from './features/rubro/lista-rubro/lista-rubro.component';
import { IndiceRubroComponent } from './features/rubro/indice-rubro/indice-rubro.component';
import { CrearRubroComponent } from './features/rubro/crear-rubro/crear-rubro.component';
import { EditarRubroComponent } from './features/rubro/editar-rubro/editar-rubro.component';
import { ListaAsuntoDeContactoComponent } from './features/asuntoDeContacto/lista-asuntoDeContacto/lista-asuntoDeContacto.component';
import { IndiceAsuntoDeContactoComponent } from './features/asuntoDeContacto/indice-asuntoDeContacto/indice-asuntoDeContacto.component';
import { CrearAsuntoDeContactoComponent } from './features/asuntoDeContacto/crear-asuntoDeContacto/crear-asuntoDeContacto.component';
import { EditarAsuntoDeContactoComponent } from './features/asuntoDeContacto/editar-asuntoDeContacto/editar-asuntoDeContacto.component';
import { ListaEmpresaComponent } from './features/empresa/lista-empresa/lista-empresa.component';
import { IndiceEmpresaComponent } from './features/empresa/indice-empresa/indice-empresa.component';
import { CrearEmpresaComponent } from './features/empresa/crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './features/empresa/editar-empresa/editar-empresa.component';
import { ListaUsuarioComponent } from './features/usuario/listado-usuario/listado-usuario.component';
import { IndiceUsuarioComponent } from './features/usuario/indice-usuario/indice-usuario.component';
import { EditarUsuarioComponent } from './features/usuario/editar-usuario/editar-usuario.component';
import { CrearUsuarioComponent } from './features/usuario/crear-usuario/crear-usuario.component';
import { IndiceRolComponent } from './features/rol/indice-rol/indice-rol.component';
import { CrearRolComponent } from './features/rol/crear-rol/crear-rol.component';
import { ListaRolComponent } from './features/rol/lista-rol/lista-rol.component';
import { EditarRolComponent } from './features/rol/editar-rol/editar-rol.component';

export const routes: Routes = [
  {
    path: 'area',
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
  },
  {
    path: 'rubro',
    children: [
      { path: '', component: ListaRubroComponent },
      { path: 'listado', component: IndiceRubroComponent },
      { path: 'crear', component: CrearRubroComponent },
      { path: 'editar/:id', component: EditarRubroComponent }
    ]
  },
  {
    path: 'asuntoDeContacto',
    children: [
      { path: '', component: ListaAsuntoDeContactoComponent },
      { path: 'listado', component: IndiceAsuntoDeContactoComponent },
      { path: 'crear', component: CrearAsuntoDeContactoComponent },
      { path: 'editar/:id', component: EditarAsuntoDeContactoComponent }
    ]
  },
  {
    path: 'empresa',
    children: [
      { path: '', component: ListaEmpresaComponent },
      { path: 'listado', component: IndiceEmpresaComponent },
      { path: 'crear', component: CrearEmpresaComponent },
      { path: 'editar/:id', component: EditarEmpresaComponent }
    ]
  },
  {
    path: 'usuario',
    children: [
      { path: '', component: ListaUsuarioComponent },
      { path: 'listado', component: IndiceUsuarioComponent },
      { path: 'crear', component: CrearUsuarioComponent },
      { path: 'editar/:id', component: EditarUsuarioComponent }
    ]
  },
  {
    path: 'rol',
    children: [
      { path: '', component: ListaRolComponent },
      { path: 'listado', component: IndiceRolComponent },
      { path: 'crear', component: CrearRolComponent },
      { path: 'editar/:id', component: EditarRolComponent },
    ]
  }

];
