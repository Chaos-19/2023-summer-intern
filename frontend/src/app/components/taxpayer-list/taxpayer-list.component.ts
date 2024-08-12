import { Component, inject } from '@angular/core';
import { TaxpayerService } from '../../core/services/tax-payer.service';
import { TaxPayer } from '../../tpes';

@Component({
  selector: 'app-taxpayer-list',
  standalone: true,
  imports: [],
  templateUrl: './taxpayer-list.component.html',
  styleUrl: './taxpayer-list.component.css',
})
export class TaxpayerListComponent {
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
  }
}
