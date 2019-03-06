import { Component } from '@angular/core';
import { DataService } from '@app/core/services/data.service';

@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent {
  constructor(private dataService: DataService) {}

  login(): void {
    this.dataService.login();
  }
}
