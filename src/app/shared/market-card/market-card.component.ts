import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketData } from '../../core/services/financial.service';

@Component({
  selector: 'masTi-market-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-card.component.html',
  styleUrls: ['./market-card.component.scss']
})
export class MarketCardComponent {
  @Input() data!: MarketData;

  get priceChangeClass(): string {
    return this.data.changePercent >= 0 ? 'price-up' : 'price-down';
  }
} 