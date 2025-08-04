import { Component, computed, inject, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from "./area.list.component/area.list.component";
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, AreaListComponent],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})

export default class AreaComponent {

}
