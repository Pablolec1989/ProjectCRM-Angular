import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RUBRO_SERVICE_TOKEN } from "../../rubro/rubro.provider";
import { MatSelectModule } from "@angular/material/select";
import { RubroService } from "../../rubro/rubro.service";
import { CONDICION_IVA_SERVICE_TOKEN } from "../../condicionIva/condicionIva.provider";
import { CondicionIvaService } from "../../condicionIva/condicionIva.service";
import { EMPRESA_SERVICE_TOKEN } from "../empresa.provider";
import { EmpresaService } from '../empresa.service';
import { IEmpresaService } from "../IEmpresaService";
import { empresaRequestDTO } from "../models/empresa.model";
import { FormEmpresaComponent } from "../form-empresa/form-empresa.component";
import { Component, inject } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { extractErrorsFromApi } from "src/app/shared/components/functions/extractErrorsFromAPI";
import { MostrarErroresComponent } from "src/app/shared/components/mostrar-errores/mostrar-errores.component";


@Component({
  selector: 'app-crear-empresa',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    FormEmpresaComponent,
    MostrarErroresComponent
],
  templateUrl: './crear-empresa.component.html',
  providers: [
    { provide: EMPRESA_SERVICE_TOKEN, useClass: EmpresaService },
    { provide: RUBRO_SERVICE_TOKEN, useClass: RubroService },
    { provide: CONDICION_IVA_SERVICE_TOKEN, useClass: CondicionIvaService },
  ]
})
export class CrearEmpresaComponent {

  private router = inject(Router);
  empresaService = inject(EMPRESA_SERVICE_TOKEN);
  errors: string[] = [];

  guardarCambios(empresa: empresaRequestDTO) {
    this.empresaService.post(empresa).subscribe({
      next: () => {
        this.router.navigate(['/empresa/listado']);
      },
      error: (err) => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;

        }

    })
  }


}
