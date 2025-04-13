import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'masTi-monthlybudget-summary',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './monthlybudget-summary.component.html',
  styleUrl: './monthlybudget-summary.component.scss'
})
export class MonthlybudgetSummaryComponent implements OnInit {
  data: any;
  options: any;
  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: [
          'Groceries',
          'Utilities & Bills',
          'Transportation',
          'Others',
          'Entertainment',
          'Dining Out & Food'
        ],
        datasets: [
          {
            label: 'monthlyBudget',
            backgroundColor: documentStyle.getPropertyValue('--p-blue-500'),
            borderColor: documentStyle.getPropertyValue('--p-blue-500'),
            data: [7500, 4500, 4300, 3000, 5000, 4500]
          },
          {
            label: 'remaining',
            backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
            borderColor: documentStyle.getPropertyValue('--p-green-500'),
            data: [7200, 4500, 4300, 2800, 4900, 4500]
          },
          {
            label: 'spent',
            backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
            borderColor: documentStyle.getPropertyValue('--p-red-500'),
            data: [300, 0, 0, 200, 100, 0]
          }
        ]
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          },
          tooltip: {
            callbacks: {
              label: function (context: any) {
                return `${context.dataset.label}: ${context.raw}`;
              }
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };

      this.cd.markForCheck();
    }
  }
}
