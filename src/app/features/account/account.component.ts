
import { Component, OnInit, ViewChild } from '@angular/core';
import { SortableColumn, SortIcon, Table, TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { Tag, TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CommonModule } from '@angular/common';
interface Account {
  id: number;
  name: string;
  number: string;
  type: 'bank' | 'wallet' | 'credit card' | 'demat' | 'other';
  balance: number;
  status: 'active' | 'inactive';
  createdAt: string; // ISO string or formatted date
}


@Component({
  selector: 'masTi-account',
  imports: [TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TagModule,
    CommonModule,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  accounts!: Account[];

  selectedAccounts!: Account;

  constructor() { }

  ngOnInit() {
    this.accounts = [
      { id: 1, name: 'HDFC Bank', number: '50100367887641', type: 'bank', balance: 10000, status: 'active', createdAt: '25/1/2025, 7:41:32 pm' },
      { id: 2, name: 'Canara Bank', number: '6122108000384', type: 'bank', balance: 0, status: 'active', createdAt: '1/2/2025, 9:08:24 pm' },
      { id: 3, name: 'PhonePe', number: '8797247279', type: 'wallet', balance: 0, status: 'active', createdAt: '1/2/2025, 9:09:13 pm' },
      { id: 4, name: 'SBI Card(RupPay)', number: '652902989462****', type: 'credit card', balance: 1111, status: 'active', createdAt: '1/2/2025, 9:10:46 pm' },
      { id: 5, name: 'HDFC Card(VISA)', number: '485498170170****', type: 'credit card', balance: 0, status: 'active', createdAt: '1/2/2025, 9:11:32 pm' },
      { id: 6, name: 'Zerodha', number: 'QI1958', type: 'demat', balance: 0, status: 'active', createdAt: '1/2/2025, 9:13:27 pm' },
      { id: 7, name: 'Mutual Fund', number: 'BWKPA5194E', type: 'other', balance: 0, status: 'active', createdAt: '1/2/2025, 9:14:22 pm' },
      { id: 1, name: 'HDFC Bank', number: '50100367887641', type: 'bank', balance: 10000, status: 'active', createdAt: '25/1/2025, 7:41:32 pm' },
      { id: 2, name: 'Canara Bank', number: '6122108000384', type: 'bank', balance: 0, status: 'active', createdAt: '1/2/2025, 9:08:24 pm' },
      { id: 3, name: 'PhonePe', number: '8797247279', type: 'wallet', balance: 0, status: 'active', createdAt: '1/2/2025, 9:09:13 pm' },
      { id: 4, name: 'SBI Card(RupPay)', number: '652902989462****', type: 'credit card', balance: 1111, status: 'active', createdAt: '1/2/2025, 9:10:46 pm' },
      { id: 5, name: 'HDFC Card(VISA)', number: '485498170170****', type: 'credit card', balance: 0, status: 'active', createdAt: '1/2/2025, 9:11:32 pm' },
      { id: 6, name: 'Zerodha', number: 'QI1958', type: 'demat', balance: 0, status: 'active', createdAt: '1/2/2025, 9:13:27 pm' },
      { id: 7, name: 'Mutual Fund', number: 'BWKPA5194E', type: 'other', balance: 0, status: 'active', createdAt: '1/2/2025, 9:14:22 pm' },
    ];
  }

  getTypeSeverity(type: string): "success" | "secondary" | "info" | "warn" | "danger" | "contrast" | undefined {
    switch (type) {
      case 'bank':
        return 'info';
      case 'wallet':
        return 'warn';
      case 'credit card':
        return 'danger';
      case 'demat':
        return 'success';
      default:
        return 'secondary';
    }
  }
  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt.filterGlobal(input.value, 'contains');
  }
}
