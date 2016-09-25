import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }    from './about.component';

export const aboutRoutes: Routes = [
  { path: '',    component: AboutComponent },
];

export const aboutRouting = RouterModule.forChild(aboutRoutes);

