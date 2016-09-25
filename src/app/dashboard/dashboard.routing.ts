import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }    from './dashboard.component';

export const dashboardRoutes: Routes = [
  // { path: '', redirectTo: 'dash', pathMatch: 'full'},
  // { path: 'dash',    component: DashboardComponent },
  { path: '',    component: DashboardComponent }
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);

