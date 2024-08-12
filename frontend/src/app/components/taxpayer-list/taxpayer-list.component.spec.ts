import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerListComponent } from './taxpayer-list.component';

describe('TaxpayerListComponent', () => {
  let component: TaxpayerListComponent;
  let fixture: ComponentFixture<TaxpayerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxpayerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxpayerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
