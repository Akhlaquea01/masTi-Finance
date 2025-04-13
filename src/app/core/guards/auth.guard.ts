import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const authGuard = () => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);
  
  if (isPlatformBrowser(platformId)) {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      return true;
    }
  }
  
  // Redirect to login page if not authenticated
  return router.parseUrl('/auth/login');
}; 