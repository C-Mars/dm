import { Routes } from '@angular/router';
import { TabsHomePage } from './tabs-home/tabs-home.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full',
  },
  {
    path: 'register-form',
    loadComponent: () => import('./register-form/register-form.page').then( m => m.RegisterFormPage)
  },
  {
    path: 'login-form',
    loadComponent: () => import('./login-form/login-form.page').then( m => m.LoginFormPage)
  },
  {
    path: 'tabs-home',
    component: TabsHomePage,
    children:[
      {
        path: '',
        redirectTo: 'tab-uno',
        pathMatch: 'full',
      },
      {
        path: 'tab-uno',
        loadComponent: () => import('./tabs-home/tab-uno/tab-uno.page').then( m => m.TabUnoPage)
      },
      {
        path: 'tab-dos',
        loadComponent: () => import('./tabs-home/tab-dos/tab-dos.page').then( m => m.TabDosPage)
      },
      {
        path: 'tab-tres',
        loadComponent: () => import('./tabs-home/tab-tres/tab-tres.page').then( m => m.TabTresPage)
      },
      {
        path: 'tab-cuatro',
        loadComponent: () => import('./tabs-home/tab-cuatro/tab-cuatro.page').then( m => m.TabCuatroPage)
      }
      
    ]
  }
  
  
];
