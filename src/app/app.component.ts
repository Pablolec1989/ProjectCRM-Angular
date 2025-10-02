import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { MenuComponent } from './shared/menu/menu.component';
=======
import { MenuComponent } from './menu/menu.component';
import { AreaListComponent } from "./features/area/area-list/area.list.component";
>>>>>>> 9a5b45a5345114dbe5707d953bf13a5744dd8e60

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectCRM';
}
