import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'masTi-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, ToolbarModule, AvatarModule, Menu],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Refresh',
            icon: 'pi pi-refresh'
          },
          {
            label: 'Export',
            icon: 'pi pi-upload'
          }
        ]
      }
    ];
    // Check if user is logged in
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    // const currentUser = localStorage.getItem('currentUser');
    // this.isLoggedIn = !!currentUser;
  }

  logout() {
    // localStorage.removeItem('currentUser');
    // this.isLoggedIn = false;
    // // In a real app, you would navigate to the login page
    // window.location.href = '/auth/login';
  }
} 