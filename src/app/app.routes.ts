import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: 'expense',
    loadComponent: () => import('./features/dashboard/transaction/transaction.component')
      .then(m => m.TransactionComponent),
    canActivate: [authGuard]
  },
  {
    path: 'account',
    loadComponent: () => import('./features/account/account.component')
      .then(m => m.AccountComponent),
    canActivate: [authGuard]
  },
  {
    path: 'income',
    loadComponent: () => import('./features/dashboard/transaction/transaction.component')
      .then(m => m.TransactionComponent),
    canActivate: [authGuard]
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component')
          .then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component')
          .then(m => m.RegisterComponent)
      }
    ]
  }
];
