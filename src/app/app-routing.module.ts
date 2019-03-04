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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
