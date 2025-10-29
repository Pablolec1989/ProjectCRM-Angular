import { IAreaService } from "./IAreaService";
import { InjectionToken } from '@angular/core';

export const AREA_SERVICE_TOKEN = new InjectionToken<IAreaService>('AREA_SERVICE_TOKEN')