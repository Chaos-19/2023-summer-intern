import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaxPayer } from '../../tpes';

@Injectable({
  providedIn: 'root',
})
export class TaxpayerService {
  private apiUrl = 'http://localhost:3000/TaxPayer'; //'https://localhost:7010/api/TaxPayer';

  constructor(private http: HttpClient) {}

  GetAllTaxpayer(): Observable<TaxPayer[]> {
    return this.http.get<TaxPayer[]>(this.apiUrl);
  }

  GetTaxPayer(tin: number): Observable<TaxPayer> {
    return this.http.get<TaxPayer>(`${this.apiUrl}/?tin=${tin}`);
  }

  createTaxpayer(taxpayer: TaxPayer): Observable<TaxPayer> {
    return this.http.post<TaxPayer>(this.apiUrl, taxpayer);
  }

  UpdateTaxpayer(tin: number, taxpayer: TaxPayer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tin}`, taxpayer);
  }

  DeleteTaxpayer(tin: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${tin}`);
  }
}
