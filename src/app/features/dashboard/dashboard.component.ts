import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketData, AIPrediction } from '../../core/services/financial.service';
import { CardModule } from 'primeng/card';
import { MonthlyAmtSummaryComponent } from "./monthly-amt-summary/monthly-amt-summary.component";
import { MonthlybudgetSummaryComponent } from './monthlybudget-summary/monthlybudget-summary.component';
import { BudgetHistoryComponent } from './budget-history/budget-history.component';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: 'masTi-dashboard',
  standalone: true,
  imports: [CommonModule, CardModule, MonthlyAmtSummaryComponent, MonthlybudgetSummaryComponent, BudgetHistoryComponent, TransactionComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  marketData: MarketData[] = [];
  aiPredictions: AIPrediction[] = [];

  constructor() { }

  ngOnInit() {
    // Using mock data instead of API calls
    this.loadMockData();
  }

  private loadMockData() {
    // Mock market data
    this.marketData = [
      {
        symbol: 'AAPL',
        price: 175.84,
        change: 2.34,
        changePercent: 1.35,
        timestamp: new Date()
      },
      {
        symbol: 'GOOGL',
        price: 142.65,
        change: -1.23,
        changePercent: -0.86,
        timestamp: new Date()
      },
      {
        symbol: 'MSFT',
        price: 378.91,
        change: 5.67,
        changePercent: 1.52,
        timestamp: new Date()
      },
      {
        symbol: 'AMZN',
        price: 178.22,
        change: 3.45,
        changePercent: 1.97,
        timestamp: new Date()
      },
      {
        symbol: 'TSLA',
        price: 172.63,
        change: -4.32,
        changePercent: -2.44,
        timestamp: new Date()
      }
    ];

    // Mock AI predictions
    this.aiPredictions = [
      {
        symbol: 'AAPL',
        predictedPrice: 182.50,
        confidence: 0.87,
        timeframe: '1 Week',
        factors: ['Strong earnings', 'New product launch', 'Market sentiment']
      },
      {
        symbol: 'GOOGL',
        predictedPrice: 145.20,
        confidence: 0.76,
        timeframe: '1 Week',
        factors: ['Ad revenue growth', 'AI initiatives', 'Cloud services']
      },
      {
        symbol: 'MSFT',
        predictedPrice: 385.00,
        confidence: 0.92,
        timeframe: '1 Week',
        factors: ['Cloud growth', 'AI integration', 'Enterprise adoption']
      },
      {
        symbol: 'AMZN',
        predictedPrice: 180.75,
        confidence: 0.81,
        timeframe: '1 Week',
        factors: ['E-commerce growth', 'AWS performance', 'Cost optimization']
      },
      {
        symbol: 'TSLA',
        predictedPrice: 168.40,
        confidence: 0.65,
        timeframe: '1 Week',
        factors: ['Production challenges', 'Competition', 'Market volatility']
      }
    ];
  }
} 