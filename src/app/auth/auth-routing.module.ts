import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormContainerComponent } from './containers/login-form-container/login-form-container.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormContainerComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

/**
 * Routing module for the Auth Module
 * Redirects to /login path if path is empty
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
