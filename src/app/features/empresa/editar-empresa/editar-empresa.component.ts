import { CommonModule } from '@angular/common';
import { Component, ComponentRef, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormEmpresaComponent } from '../form-empresa/form-empresa.component';
import { EditarGenericoComponent } from "src/app/shared/components/editar-generico/editar-generico.component";
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { EmpresaService } from '../empresa.service';
import { CondicionIvaService } from '../../condicionIva/condicionIva.service';
import { condicionIvaDTO, condicionIvaRequestDTO } from '../../condicionIva/models/condicionIva.models';
import { rubroDTO, rubroRequestDTO } from '../../rubro/models/rubro.model';
import { RubroService } from '../../rubro/rubro.service';
import { RUBRO_SERVICE_TOKEN } from '../../rubro/rubro.provider';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { CONDICION_IVA_SERVICE_TOKEN } from '../../condicionIva/condicionIva.provider';
import { extractErrorsFromApi } from 'src/app/shared/components/functions/extractErrorsFromAPI';
import { empresaDetailDTO, empresaRequestDTO } from '../models/empresa.model';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { Router } from '@angular/router';
import { IEmpresaService } from '../IEmpresaService';
import { LoadingComponent } from "src/app/shared/loading/loading.component";

@Component({
  selector: 'app-editar-empresa',
  standalone: true,
  imports: [
    CommonModule,
    EditarGenericoComponent
],
  templateUrl: './editar-empresa.component.html',
  providers:[
    { provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService },
    { provide: RUBRO_SERVICE_TOKEN, useClass: RubroService },
    { provide: CONDICION_IVA_SERVICE_TOKEN, useClass: CondicionIvaService },
  ]
})
export class EditarEmpresaComponent {

  formularioEmpresa = FormEmpresaComponent;

  condicionIvaService = inject(CONDICION_IVA_SERVICE_TOKEN) as IServiceBase<condicionIvaDTO, any>;
  rubroService = inject(RUBRO_SERVICE_TOKEN) as IServiceBase<rubroDTO, rubroRequestDTO>;
  empresaService = inject(GENERIC_SERVICE_TOKEN) as EmpresaService;

  @Input() id!: string;
  rubros: rubroDTO[] = [];
  condicionesIva: condicionIvaDTO[] = [];
  empresa: empresaDetailDTO = {} as empresaDetailDTO;
  formInputs: any = {};

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Cargar combos y empresa
    this.rubroService.getAll().subscribe((data) => {
      this.rubros = data;
      this.actualizarFormInputs();
    });
    this.condicionIvaService.getAll().subscribe((data) => {
      this.condicionesIva = data;
      this.actualizarFormInputs();
    });
    this.empresaService.getEmpresaDetailDTO(this.id).subscribe((data) => {
      this.empresa = data;
      this.actualizarFormInputs();
    });
  }

  actualizarFormInputs() {
    // Solo actualiza si todos los datos están listos
    if (this.rubros.length && this.condicionesIva.length && this.empresa) {
      this.formInputs = {
        rubros: this.rubros,
        condicionesIva: this.condicionesIva,
        model: this.empresa
      };
    }
  }


}
