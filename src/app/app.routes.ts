import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layoutcomponent';
import { Dashboard } from './dashboard/dashboard';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';

export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Dashboard },
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]
  }
];
