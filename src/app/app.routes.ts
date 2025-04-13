import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent)
  },
  {
    path: 'expense',
    loadComponent: () => import('./features/dashboard/transaction/transaction.component')
      .then(m => m.TransactionComponent)
  },
  {
    path: 'account',
    loadComponent: () => import('./features/account/account.component')
      .then(m => m.AccountComponent)
  },
  {
    path: 'income',
    loadComponent: () => import('./features/dashboard/transaction/transaction.component')
      .then(m => m.TransactionComponent)
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
