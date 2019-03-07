import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '@app/core/services/data.service';

/**
 * This guard prevents the user to enter the auth module if user is logged in
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  /**
   * If this method returns false the user can't enter to the auth module and is redirected to /spa route
   * @returns true if user is not logged in
   */
  canActivate(): boolean {
    if (this.dataService.isLogged()) {
      this.router.navigateByUrl('/spa');
      return false;
    } else {
      return true;
    }
  }
}
