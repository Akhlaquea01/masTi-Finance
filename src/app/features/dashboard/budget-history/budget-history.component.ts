import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'masTi-budget-history',
  standalone: true,
  imports: [CommonModule, ChartModule, SelectModule, FormsModule, DatePickerModule],
  templateUrl: './budget-history.component.html',
  styleUrl: './budget-history.component.scss'
})
export class BudgetHistoryComponent implements OnInit {
  selectedView = 'Monthly';
  selectedMonth = 'March';
  selectedYear = 2025;
  selectedDate: Date = new Date();

  viewOptions = [
    { label: 'Daily', value: 'Daily' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Yearly', value: 'Yearly' }
  ];

  monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  yearOptions = [2023, 2024, 2025, 2026];

  chartData: any;
  chartOptions: any;

  platformId = inject(PLATFORM_ID);
  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {

      const docStyle = getComputedStyle(document.documentElement);
      const incomeColor = docStyle.getPropertyValue('--p-blue-500');
      const expenseColor = docStyle.getPropertyValue('--p-pink-500');
      const textColor = docStyle.getPropertyValue('--p-text-color');
      const gridColor = docStyle.getPropertyValue('--p-content-border-color');

      this.chartData = {
        labels: ['Income vs Expense'],
        datasets: [
          {
            label: 'Income',
            backgroundColor: incomeColor,
            data: [3653231]
          },
          {
            label: 'Expense',
            backgroundColor: expenseColor,
            data: [3000000]
          }
        ]
      };

      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          },
          y: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          }
        }
      };
    } else {
      // Optionally, handle SSR logic here or simply skip chart initialization
      console.warn('SSR detected, skipping chart initialization');
    }

  }
}
