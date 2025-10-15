import { InjectionToken } from "@angular/core";
import { IEmpresaService } from "./IEmpresaService";

export const EMPRESA_SERVICE_TOKEN = new InjectionToken<IEmpresaService>('EMPRESA_SERVICE_TOKEN');