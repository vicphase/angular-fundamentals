import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  login(): void {
    this.router.navigateByUrl('/spa');
  }
}
