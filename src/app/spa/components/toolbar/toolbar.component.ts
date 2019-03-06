import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/core/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private dataService: DataService) {}

  logout(): void {
    this.dataService.logout();
  }
}
