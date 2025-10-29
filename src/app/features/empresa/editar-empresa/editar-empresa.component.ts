import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormEmpresaComponent } from '../form-empresa/form-empresa.component';
import { EmpresaService } from '../empresa.service';
import { CondicionIvaService } from '../../condicionIva/condicionIva.service';
import { RubroService } from '../../rubro/rubro.service';
import { RUBRO_SERVICE_TOKEN } from '../../rubro/rubro.provider';
import { CONDICION_IVA_SERVICE_TOKEN } from '../../condicionIva/condicionIva.provider';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { empresaDetailDTO, empresaRequestDTO } from '../models/empresa.model';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { Router } from '@angular/router';
import { IEmpresaService } from '../IEmpresaService';
import { LoadingComponent } from "src/app/shared/loading/loading.component";
import { MostrarErroresComponent } from "src/app/shared/components/mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-editar-empresa',
  standalone: true,
  imports: [
    CommonModule,
    FormEmpresaComponent,
    LoadingComponent,
    MostrarErroresComponent
],
  templateUrl: './editar-empresa.component.html',
  providers: [
    { provide: EMPRESA_SERVICE_TOKEN, useClass: EmpresaService },
    { provide: RUBRO_SERVICE_TOKEN, useClass: RubroService },
    { provide: CONDICION_IVA_SERVICE_TOKEN, useClass: CondicionIvaService },
  ]
})

export class EditarEmpresaComponent implements OnInit {

  private router = inject(Router);
  empresaService = inject(EMPRESA_SERVICE_TOKEN);
  errors: string[] = [];

  @Input() id!: string;
  @Input() empresa: empresaDetailDTO | undefined

  ngOnInit(): void {
    this.empresaService.getEmpresaDetailDTO(this.id).subscribe((data) => this.empresa = data)
  }

  guardarCambios(empresa: empresaRequestDTO)
  {
    this.empresaService.put(this.id, empresa).subscribe({
      next: () => {
        this.router.navigate(['/empresa/listado'])
      },
      error: (err) => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;
      }
    })
    console.log(empresa);
  }




  }


