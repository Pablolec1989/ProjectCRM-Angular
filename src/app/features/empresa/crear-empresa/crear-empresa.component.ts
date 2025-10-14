import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { condicionIvaDTO } from '../../condicionIva/models/condicionIva.models';
import { rubroDTO, rubroRequestDTO } from '../../rubro/models/rubro.model';
import { EmpresaService } from '../empresa.service';
import { FormEmpresaComponent } from "../form-empresa/form-empresa.component";
import { CrearGenericoComponent } from "src/app/shared/components/crear-generico/crear-generico.component";
import { CondicionIvaService } from '../../condicionIva/condicionIva.service';
import { RubroService } from '../../rubro/rubro.service';
import { GENERIC_SERVICE_TOKEN } from 'src/app/shared/components/povider/provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPRESA_SERVICE_TOKEN } from '../empresa.provider';
import { IServiceBase } from 'src/app/shared/interfaces/IServiceBase';
import { RUBRO_SERVICE_TOKEN } from '../../rubro/rubro.provider';
import { CONDICION_IVA_SERVICE_TOKEN } from '../../condicionIva/condicionIva.provider';

@Component({
  selector: 'app-crear-empresa',
  standalone: true,
  imports: [
    CommonModule,
    CrearGenericoComponent
  ],
  templateUrl: './crear-empresa.component.html',
  providers: [
    { provide: GENERIC_SERVICE_TOKEN, useClass: EmpresaService },
    { provide: RUBRO_SERVICE_TOKEN, useClass: RubroService },
    { provide: CONDICION_IVA_SERVICE_TOKEN, useClass: CondicionIvaService },
  ]
})
export class CrearEmpresaComponent {

  formularioEmpresa = FormEmpresaComponent;

  condicionIvaService = inject(CondicionIvaService);
  rubroService = inject(RubroService);

  rubros: rubroDTO[] = [];
  condicionesIva: condicionIvaDTO[] = [];
  formInputs: any = {};

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.rubroService.getAll().subscribe((data) => {
      this.rubros = data;
      this.actualizarFormInputs();
    });
    this.condicionIvaService.getAll().subscribe((data) => {
      this.condicionesIva = data;
      this.actualizarFormInputs();
    });
  }

  actualizarFormInputs() {
    // Solo actualiza si ambos combos están listos
    if (this.rubros.length && this.condicionesIva.length) {
      this.formInputs = {
        rubros: this.rubros,
        condicionesIva: this.condicionesIva
      };
    }
  }


}
