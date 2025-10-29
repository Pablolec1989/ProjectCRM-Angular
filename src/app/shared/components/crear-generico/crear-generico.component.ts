import { CommonModule } from "@angular/common";
import { Component, AfterViewInit, Input, inject, ViewChild, ViewContainerRef, ComponentRef } from "@angular/core";
import { Router } from "@angular/router";
import { IServiceBase } from "../../interfaces/IServiceBase";
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";
import { GENERIC_SERVICE_TOKEN } from "../povider/provider";
import { extractErrorsFromApi } from "../functions/extractErrorsFromAPI";

@Component({
    selector: 'app-crear-generico',
    imports: [
    CommonModule,
    MostrarErroresComponent
],
  templateUrl: './crear-generico.component.html',
})
export class CrearGenericoComponent<TDTO, TRequestDTO> implements AfterViewInit {
ngAfterViewInit() {
  this.componentRef = this.contenedorFormulario.createComponent(this.formulario);

  // Solo asigna formInputs si existen
  if (this.formInputs !== undefined) {
    Object.entries(this.formInputs).forEach(([key, value]) => {
      this.componentRef.instance[key] = value;
    });
  }

  this.componentRef.instance.posteoFormulario.subscribe((entity: any) => {
    this.guardarCambios(entity);
  });
}

  @Input() formInputs?: any;
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaIndice!: string;
  @Input({ required: true }) formulario!: any;

  genericService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<TDTO, TRequestDTO>;
  private readonly router = inject(Router);

  @ViewChild('contenedorFormulario', { read: ViewContainerRef, static: true })
  contenedorFormulario!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;
  errors : string[] = [];

  guardarCambios(entity: TRequestDTO) {
    this.genericService.post(entity).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: err => {
        const errores = extractErrorsFromApi(err);
        this.errors = errores;
      }
    });
  }
}
