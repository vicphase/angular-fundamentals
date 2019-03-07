import { Component } from '@angular/core';
import { DataService } from '@app/core/services/data.service';

/**
 * Container component to handle the user login
 */
@Component({
  selector: 'app-login-form-container',
  templateUrl: './login-form-container.component.html',
  styleUrls: ['./login-form-container.component.scss']
})
export class LoginFormContainerComponent {
  constructor(private dataService: DataService) {}

  /**
   * Calls the data service to login the user.
   * The authentication in this application is mocked for educational purposes.
   */
  login(): void {
    this.dataService.login();
  }
}
