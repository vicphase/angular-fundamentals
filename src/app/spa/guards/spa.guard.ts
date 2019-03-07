import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '@app/core/services/data.service';

/**
 * This guard prevents the user to enter the spa module if user is not logged in
 */
@Injectable({
  providedIn: 'root'
})
export class SpaGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  /**
   * If this method returns false the user can't enter to the spa module and is redirected to /auth route
   * @returns true if user is logged in
   */
  canActivate(): boolean {
    if (!this.dataService.isLogged()) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
}
