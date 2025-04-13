import { Component, OnInit, PLATFORM_ID, inject, OnDestroy } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { CreteModalComponent } from '../crete-modal/crete-modal.component';
import { SidebarModule } from 'primeng/sidebar';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'masTi-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, ToolbarModule, AvatarModule, MenuModule, SidebarModule, CreteModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private routerSubscription: Subscription | undefined;
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
    
    // Subscribe to router events to check login status on navigation
    if (isPlatformBrowser(this.platformId)) {
      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.checkLoginStatus();
      });
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private initializeMenu() {
    this.items = [
      {
        label: 'Akhlaque',
        items: [
          {
            label: 'Manage Profile',
            icon: 'pi pi-user',
            command: () => this.router.navigate(['/account'])
          },
          {
            label: 'Theme',
            icon: this.isDarkMode ? 'pi pi-moon' : 'pi pi-sun',
            command: () => this.toggleTheme()
          },
          {
            label: 'Logout',
            icon: 'pi pi-lock-open',
            command: () => this.logout()
          }
        ]
      }
    ];
  }

  checkLoginStatus() {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = localStorage.getItem('currentUser');
      this.isLoggedIn = !!currentUser;
    } else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
    }
    this.isLoggedIn = false;
    this.router.navigate(['/auth/login']);
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