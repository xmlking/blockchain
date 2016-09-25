import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];

export const appRouting = RouterModule.forRoot(appRoutes);




