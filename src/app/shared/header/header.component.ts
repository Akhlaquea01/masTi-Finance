import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CreteModalComponent } from '../crete-modal/crete-modal.component';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'masTi-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, ToolbarModule, AvatarModule, MenuModule, SidebarModule, CreteModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  items: MenuItem[] | undefined;
  isLoggedIn: boolean = false;
  visible = false;
  sidebarVisible = false;
  isDarkMode = false;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = document.documentElement.classList.contains('my-app-dark');
    }
  }

  ngOnInit() {
    this.initializeMenu();
    this.checkLoginStatus();
  }

  private initializeMenu() {
    this.items = [
      {
        label: 'Akhlaque',
        items: [
          {
            label: 'Manage Profile',
            icon: 'pi pi-user'
          },
          {
            label: 'Theme',
            icon: this.isDarkMode ? 'pi pi-moon' : 'pi pi-sun',
            command: () => this.toggleTheme()
          },
          {
            label: 'Logout',
            icon: 'pi pi-lock-open'
          }
        ]
      }
    ];
  }

  checkLoginStatus() {
    // const currentUser = localStorage.getItem('currentUser');
    // this.isLoggedIn = !!currentUser;
  }

  logout() {
    // localStorage.removeItem('currentUser');
    // this.isLoggedIn = false;
    // window.location.href = '/auth/login';
  }

  onVisibleChange(value: boolean) {
    this.visible = value;
  }

  toggleTheme() {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('my-app-dark');
      // Update the theme icon
      const themeMenuItem = this.items?.[0].items?.find(item => item.label === 'Theme');
      if (themeMenuItem) {
        themeMenuItem.icon = this.isDarkMode ? 'pi pi-moon' : 'pi pi-sun';
      }
    }
  }
} 