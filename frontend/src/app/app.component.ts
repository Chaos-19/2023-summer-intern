import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import type { TaxPayer, Tile } from './tpes';
import { SideBarComponent } from './components/ui/side-bar/side-bar.component';
import { EmployFormComponent } from './components/forms/taxpayer-form/employ-form.component';
import { TaxpayerService } from './core/services/tax-payer.service';
import { HttpClientModule } from '@angular/common/http';

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

  taxpayerService = inject(TaxpayerService);
  list!: TaxPayer[];

  constructor() {
    this.taxpayerService.GetAllTaxpayer().subscribe({
      next: (res) => {
        this.list = res;
        console.log(res);
      },
      error: (err: any) => console.error('Error occurred:', err),
      complete: () => console.log('Request completed'),
    });
    this.taxpayerService.GetTaxPayer(123456789).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err: any) => console.error('Error occurred:', err),
      complete: () => console.log('Request completed'),
    });
  }
}
