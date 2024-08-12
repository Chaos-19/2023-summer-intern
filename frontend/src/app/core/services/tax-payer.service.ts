import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as rxjs from 'rxjs';
import { TaxPayer } from '../../tpes';

@Injectable({
  providedIn: 'root'
})
export class TaxpayerService {

  private apiUrl = 'https://localhost:7010/api/TaxPayer'; 

  constructor(private http: HttpClient) { }

  GetAllTaxpayer(): rxjs.Observable<TaxPayer[]> {
    return this.http.get<TaxPayer[]>(this.apiUrl);
  }

  GetTaxPayer(tin: number): rxjs.Observable<TaxPayer> {
    return this.http.get<TaxPayer>(`${this.apiUrl}/${tin}`);
  }

  createTaxpayer(taxpayer: TaxPayer): rxjs.Observable<TaxPayer> {
    return this.http.post<TaxPayer>(`${this.apiUrl}/CreateTaxpayer`, taxpayer);
  }

  UpdateTaxpayer(tin: number, taxpayer: TaxPayer): rxjs.Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tin}`, taxpayer);
  }

  DeleteTaxpayer(tin: number): rxjs.Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${tin}`);
  }
}
