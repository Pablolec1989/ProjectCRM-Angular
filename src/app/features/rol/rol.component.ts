import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rol.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RolComponent { }
