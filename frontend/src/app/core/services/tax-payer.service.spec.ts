import { TestBed } from '@angular/core/testing';
import { TaxpayerService } from './tax-payer.service';

describe('TaxPayerService', () => {
  let service: TaxpayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxpayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
