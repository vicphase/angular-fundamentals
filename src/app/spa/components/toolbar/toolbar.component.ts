import { Component } from '@angular/core';
import { DataService } from '@app/core/services/data.service';

/**
 * Presentational component that displays the top toolbar inside our application
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private dataService: DataService) {}

  /**
   * Calls the data service to logout the user.
   * The authentication in this application is mocked for educational purposes.
   */
  logout(): void {
    this.dataService.logout();
  }
}
