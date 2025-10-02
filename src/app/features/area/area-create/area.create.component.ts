import { Router } from '@angular/router';
import { AreaService } from '../area.service';
import { AreaDTO } from '../../../models/areaDTO.model';
import { FormularioAreaComponent } from '../area-form/formulario-area.component';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'area-create',
  standalone: true,
  imports: [FormularioAreaComponent],
  templateUrl: './area.create.component.html',
})
export class AreaCreateComponent {
  private areaService = inject(AreaService);
  private router = inject(Router);

  guardarCambios(area: AreaDTO) {
    this.areaService.PostArea(area);
    this.router.navigate(['areas']);
  }
}
