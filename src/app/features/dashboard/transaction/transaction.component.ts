import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'masTi-transaction',
  standalone: true,
  imports: [CommonModule, PaginatorModule, RippleModule, CardModule],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit {
  PrimeIcons = PrimeIcons;
  first = 0;
  rows = 5;
  currentRoute: string = '';
  pageTitle: string = 'Recent Transactions';

  transactions = [
    {
      icon: PrimeIcons.DOLLAR,
      category: 'Freelance Project Payment',
      description: 'Upwork Client - Logo Design',
      amount: 3500,
      date: new Date('2025-04-10T09:45:00'),
      type: 'income'
    },
    {
      icon: PrimeIcons.SHOPPING_CART,
      category: 'Grocery Shopping',
      description: 'Walmart - Weekly Essentials',
      amount: -128.75,
      date: new Date('2025-04-09T17:30:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.BOOK,
      category: 'Online Course',
      description: 'Angular Masterclass - Udemy',
      amount: -59.99,
      date: new Date('2025-04-08T14:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CREDIT_CARD,
      category: 'Credit Card Payment',
      description: 'Chase Card Auto Payment',
      amount: -1500,
      date: new Date('2025-04-07T08:15:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CLOUD_DOWNLOAD,
      category: 'Cloud Services',
      description: 'AWS Monthly Bill',
      amount: -82.50,
      date: new Date('2025-04-06T23:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.MONEY_BILL,
      category: 'Bonus Income',
      description: 'Quarterly Performance Bonus',
      amount: 12500,
      date: new Date('2025-04-05T16:45:00'),
      type: 'income'
    },
    {
      icon: PrimeIcons.SHOPPING_BAG,
      category: 'Clothing',
      description: 'Zara - New Jacket',
      amount: -89.99,
      date: new Date('2025-04-04T18:20:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.GIFT,
      category: 'Gift Received',
      description: 'Birthday Gift from Family',
      amount: 500,
      date: new Date('2025-04-03T20:00:00'),
      type: 'income'
    },
    {
      icon: PrimeIcons.BOOK,
      category: "Children's Education",
      description: 'Spring Semester Tuition',
      amount: -3000,
      date: new Date('2025-04-02T09:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.DOLLAR,
      category: 'Salary',
      description: 'April Salary - Company XYZ',
      amount: 68000,
      date: new Date('2025-04-01T10:00:00'),
      type: 'income'
    },
    {
      icon: PrimeIcons.HEART,
      category: 'Health & Wellness',
      description: 'Dental Checkup',
      amount: -200,
      date: new Date('2025-03-31T15:45:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.SEND,
      category: 'Fuel',
      description: 'Shell Gas Station',
      amount: -55.20,
      date: new Date('2025-03-30T12:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.SEND,
      category: 'Charity Donation',
      description: 'Local Food Bank',
      amount: -100,
      date: new Date('2025-03-29T13:30:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.HOME,
      category: 'Rent',
      description: 'Monthly Rent - April',
      amount: -12000,
      date: new Date('2025-03-28T08:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CAMERA,
      category: 'Hobby',
      description: 'Camera Lens Purchase',
      amount: -799,
      date: new Date('2025-03-27T14:10:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CAMERA,
      category: 'Travel',
      description: 'Flight Tickets to Goa',
      amount: -15500,
      date: new Date('2025-03-26T07:00:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CAR,
      category: 'Car EMI',
      description: 'Monthly EMI - Maruti Suzuki',
      amount: -7500,
      date: new Date('2025-03-25T10:15:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.PHONE,
      category: 'Mobile Recharge',
      description: 'Airtel Unlimited Plan',
      amount: -399,
      date: new Date('2025-03-24T18:40:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.CHART_LINE,
      category: 'Stock Investment',
      description: 'Bought HDFC Shares',
      amount: -10000,
      date: new Date('2025-03-23T11:30:00'),
      type: 'expense'
    },
    {
      icon: PrimeIcons.MONEY_BILL,
      category: 'Interest Income',
      description: 'FD Interest - SBI Bank',
      amount: 1200,
      date: new Date('2025-03-22T09:00:00'),
      type: 'income'
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get filteredTransactions() {
    switch (this.currentRoute) {
      case 'income':
        return this.transactions.filter(t => t.amount > 0);
      case 'expense':
        return this.transactions.filter(t => t.amount < 0);
      default:
        return this.transactions;
    }
  }

  get paginatedTransactions() {
    return this.filteredTransactions.slice(this.first, this.first + this.rows);
  }

  ngOnInit() {
    // Get the current route
    this.currentRoute = this.router.url.split('/')[1];
    
    // Set the page title based on the route
    switch (this.currentRoute) {
      case 'income':
        this.pageTitle = 'Income Transactions';
        break;
      case 'expense':
        this.pageTitle = 'Expense Transactions';
        break;
      default:
        this.pageTitle = 'Recent Transactions';
    }
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  formatAmount(amount: number): string {
    return amount >= 0 ? `+₹${amount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}` 
                      : `-₹${Math.abs(amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}`;
  }
}
