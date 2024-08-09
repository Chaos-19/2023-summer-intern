import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import type { Tile } from './tpes';
import { SideBarComponent } from './components/ui/side-bar/side-bar.component';
import { EmployFormComponent } from './components/forms/employ-form/employ-form.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatGridListModule, SideBarComponent, EmployFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project-01';

  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 3, color: 'lightblue' },
    { text: 'Four', cols: 3, rows: 3, color: '#DDBDF1' },
  ];
}
