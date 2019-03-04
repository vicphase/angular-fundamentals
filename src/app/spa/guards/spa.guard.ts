import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '@app/core/services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SpaGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(): boolean {
    if (!this.dataService.isLogged()) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
}
