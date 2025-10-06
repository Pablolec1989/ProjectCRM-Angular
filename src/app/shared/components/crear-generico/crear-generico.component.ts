import { CommonModule } from "@angular/common";
import { Component, AfterViewInit, Input, inject, ViewChild, ViewContainerRef, ComponentRef } from "@angular/core";
import { Router } from "@angular/router";
import { IServicioCRUD } from "../../interfaces/IServiceBase";
import { GENERIC_SERVICE_TOKEN } from "../povider/provider";


@Component({
  selector: 'app-crear-generico',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './crear-generico.component.html',
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

  genericService = inject(GENERIC_SERVICE_TOKEN) as IServicioCRUD<TDTO, TRequestDTO>;
  private readonly router = inject(Router);

  @ViewChild('contenedorFormulario', { read: ViewContainerRef, static: true })
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  guardarCambios(entity: TRequestDTO) {
    this.genericService.post(entity).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: (err) => {
        console.error('No se pudo crear la entidad', err);
      }
    });
  }
}
