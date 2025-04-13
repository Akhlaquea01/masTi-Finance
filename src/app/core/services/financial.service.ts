import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  timestamp: Date;
}

export interface AIPrediction {
  symbol: string;
  predictedPrice: number;
  confidence: number;
  timeframe: string;
  factors: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  constructor(private http: HttpClient) {}

  getMarketData(symbol: string): Observable<MarketData> {
    return this.http.get<MarketData>(`/api/market-data/${symbol}`);
  }

  getAIPredictions(symbol: string): Observable<AIPrediction> {
    return this.http.get<AIPrediction>(`/api/ai-predictions/${symbol}`);
  }

  getPortfolioAnalysis(userId: string): Observable<any> {
    return this.http.get(`/api/portfolio-analysis/${userId}`);
  }

  getRiskAssessment(portfolioId: string): Observable<any> {
    return this.http.get(`/api/risk-assessment/${portfolioId}`);
  }

  getMarketSentiment(): Observable<any> {
    return this.http.get('/api/market-sentiment');
  }
} 