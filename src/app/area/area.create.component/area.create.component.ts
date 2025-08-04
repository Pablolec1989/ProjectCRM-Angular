import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AreaService } from '../area.service';
import { AreaDTO } from '../interfaces/interface.area';

@Component({
  selector: 'area-create',
  standalone: true,
  imports: [MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './area.create.component.html',
})
export class AreaCreateComponent {

  private formBuilder = inject(FormBuilder);
  private AreaService = inject(AreaService);
  private router = inject(Router);

  form = this.formBuilder.group({
    nombre: ['', {validators:[Validators.required]}],
  })

  obtenerErrorCampoNombre():string {
    let nombre = this.form.controls.nombre
    if (nombre.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    let area = this.form.value as AreaDTO;
    this.AreaService.PostAreas(area).subscribe(()=>{
      this.router.navigate(['areas']);
    })
  }
}