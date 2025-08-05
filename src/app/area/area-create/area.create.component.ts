import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AreaService } from '../area.service';
import { AreaDTO } from '../interfaces/interface.area';
import { FormularioAreaComponent } from "../area-form/formulario-area.component";

@Component({
  selector: 'area-create',
  standalone: true,
  imports: [
    FormularioAreaComponent
],
  templateUrl: './area.create.component.html',
})
export class AreaCreateComponent {

  private areaService = inject(AreaService);
  private router = inject(Router);

  guardarCambios(area: AreaDTO){
    this.areaService.PostArea(area).subscribe(()=>{
      this.router.navigate(["areas"])
    })
  }
}
