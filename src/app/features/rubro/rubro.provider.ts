import { InjectionToken } from "@angular/core";
import { RubroService } from "./rubro.service";
import { IRubroService } from "./IRubroService";

export const RUBRO_SERVICE_TOKEN = new InjectionToken<IRubroService>("RUBRO_SERVICE_TOKEN");