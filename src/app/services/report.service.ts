import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CertificationByUser } from '../models/certification-by-user';
import { environment } from '../../environments/environment';
import { InvestmentByUser } from '../models/investment-by-user';

@Injectable({
  providedIn: 'root',
})

export class ReportService {
  constructor(private httpClient: HttpClient) {}

  getCertificationByUser() {
    return this.httpClient.get<CertificationByUser[]>(
      `${environment.apiURL}/segura/certifications/quantityByUser`
    );
  }

  getInvestmentByUser() {
    return this.httpClient.get<InvestmentByUser[]>(
      `${environment.apiURL}/segura/certifications/investmentByUser`
    );
  }
}
