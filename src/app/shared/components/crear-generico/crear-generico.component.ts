import { CommonModule } from "@angular/common";
import { Component, AfterViewInit, Input, inject, ViewChild, ViewContainerRef, ComponentRef } from "@angular/core";
import { Router } from "@angular/router";
import { IServiceBase } from "../../interfaces/IServiceBase";
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";
import { GENERIC_SERVICE_TOKEN } from "../povider/provider";
import { extractErrors } from "../functions/extractErrorsFromAPI";

@Component({
    selector: 'app-crear-generico',
    imports: [
    CommonModule,
    MostrarErroresComponent
],
    templateUrl: './crear-generico.component.html'
})
export class CrearGenericoComponent<TDTO, TRequestDTO> implements AfterViewInit {
  ngAfterViewInit(): void {
    this.componentRef = this.contenedorFormulario.createComponent(this.formulario);
    this.componentRef.instance.posteoFormulario.subscribe((entity: any) => {
      this.guardarCambios(entity);
    })
  }

  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaIndice!: string;
  @Input({ required: true }) formulario!: any;

  genericService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<TDTO, TRequestDTO>;
  private readonly router = inject(Router);

  @ViewChild('contenedorFormulario', { read: ViewContainerRef, static: true })
  contenedorFormulario!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;
  errores : string[] = [];

  guardarCambios(entity: TRequestDTO) {
    this.genericService.post(entity).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: err => {
        const errores = extractErrors(err);
        this.errores = errores;
      }
    });
  }
}
