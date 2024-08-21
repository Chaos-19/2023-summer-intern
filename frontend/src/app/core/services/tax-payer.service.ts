import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as rxjs from 'rxjs';
import { TaxPayer } from '../../tpes';

@Injectable({
  providedIn: 'root',
})
export class TaxpayerService {
  private apiUrl = 'http://localhost:5209/api/TaxPayer';

  constructor(private http: HttpClient) {}

  GetAllTaxpayer(): rxjs.Observable<TaxPayer[]> {
    return this.http.get<TaxPayer[]>(this.apiUrl);
  }

  GetTaxPayer(tin: number): rxjs.Observable<TaxPayer> {
    return this.http.get<TaxPayer>(`${this.apiUrl}/${tin}`);
  }

  createTaxpayer(taxpayer: TaxPayer): rxjs.Observable<TaxPayer> {
    console.log('Requesting');
    console.log(taxpayer);

    return this.http.post<TaxPayer>(`${this.apiUrl}/CreateTaxpayer`, {
      TaxPayerId: 0,
      ...taxpayer,
    });
  }

  UpdateTaxpayer(tin: number, taxpayer: TaxPayer): rxjs.Observable<void> {
    return this.http.put<void>(
      `${this.apiUrl}/UpdateTaxPayer/${tin}`,
      taxpayer
    );
  }

  DeleteTaxpayer(tin: number): rxjs.Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/DeleteTaxPayer/${tin}`);
  }
}
