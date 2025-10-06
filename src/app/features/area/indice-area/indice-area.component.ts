import { Component, inject } from "@angular/core";
import { AreaService } from "../area.service";
import { GENERIC_SERVICE_TOKEN } from "src/app/shared/components/povider/provider";
import { IndiceGenericoComponent } from "src/app/shared/components/indice-generico/indice-generico.component";

@Component({
    selector: 'app-indice-area',
    imports: [IndiceGenericoComponent],
    templateUrl: './indice-area.component.html',
    providers: [{
            provide: GENERIC_SERVICE_TOKEN, useClass: AreaService
        }]
})
export class IndiceAreaComponent
{

}
