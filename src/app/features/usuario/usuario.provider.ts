import { InjectionToken } from "@angular/core";
import { IUsuarioService } from "./IUsuarioService";

export const USUARIO_SERVICE_TOKEN = new InjectionToken<IUsuarioService>('USUARIO_SERVICE_TOKEN');