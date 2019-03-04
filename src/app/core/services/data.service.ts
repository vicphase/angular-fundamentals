import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private router: Router) {}

  login(): void {
    localStorage.setItem('logged', 'true');
    this.router.navigateByUrl('/spa');
  }

  logout(): void {
    localStorage.setItem('logged', 'false');
    this.router.navigateByUrl('/auth');
  }

  isLogged(): boolean {
    return localStorage.getItem('logged') === 'true';
  }
}
