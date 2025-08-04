import { Component, inject, Input, input, OnInit } from '@angular/core';
import { AreaService } from '../area.service';
import { AreaDTO } from '../interfaces/interface.area';
import { FormularioAreaComponent } from "../formulario-area/formulario-area.component";
import { Router } from '@angular/router';

@Component({
  selector: 'area-update',
  standalone: true,
  imports: [FormularioAreaComponent],
  templateUrl: './area.update.component.html',
})
export class AreaUpdateComponent implements OnInit {

  router = inject(Router);

  @Input()
  id!: string;

  areaService = inject(AreaService);
  modelo?:AreaDTO;

  ngOnInit(): void {
    this.areaService.GetById(this.id).subscribe(area =>{
      this.modelo = area;
    })
  }

  guardarCambios(area: AreaDTO) {
    this.areaService.PutAreas(this.id, area).subscribe(()=>{
      this.router.navigate(['/areas'])

    })
  }




}
