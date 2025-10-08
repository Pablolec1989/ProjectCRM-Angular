import { CommonModule } from '@angular/common';
import { Component, ComponentRef, inject, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { IServiceBase } from '../../interfaces/IServiceBase';
import { GENERIC_SERVICE_TOKEN } from '../povider/provider';
import { LoadingComponent } from "../../loading/loading.component";

@Component({
  selector: 'app-editar-generico',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent
],
  templateUrl: './editar-generico.component.html',
})
export class EditarGenericoComponent<TDTO, TRequestDTO> implements OnInit {
  
  ngOnInit(): void {
    this.genericService.getById(this.id)
      .subscribe((entity) => {
        this.cargarComponente(entity);
      })
  }

  cargarComponente(entity: any) {
    if (this.contenedorFormulario) {
      this.componentRef = this.contenedorFormulario.createComponent(this.formulario);
      this.componentRef.instance.model = entity;
      this.componentRef.instance.posteoFormulario.subscribe((entity: any) => {
        this.guardarCambios(entity);
      })

      this.cargando = false;
    }
  }

  @Input() id!: string;
  @Input({ required: true }) titulo!: string;
  @Input({ required: true }) rutaIndice!: string;
  @Input({ required: true }) formulario!: any;

  genericService = inject(GENERIC_SERVICE_TOKEN) as IServiceBase<TDTO, TRequestDTO>;
  private readonly router = inject(Router);

  cargando = true;

  @ViewChild('contenedorFormulario', { read: ViewContainerRef, static: true })
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  guardarCambios(entity: TRequestDTO) {
    this.genericService.put(this.id, entity).subscribe({
      next: () => {
        this.router.navigate([this.rutaIndice]);
      },
      error: (err) => {
        console.error('No se pudo crear la entidad', err);
      }
    });
  }
}
