import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { SpaGuard } from './spa/guards/spa.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'spa',
    loadChildren: 'app/spa/spa.module#SpaModule',
    canActivate: [SpaGuard]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];

/**
 * Main routing module of our application.
 * It lazy loads the auth, and spa module.
 * The Spa module contains the rest of the feature modules.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
