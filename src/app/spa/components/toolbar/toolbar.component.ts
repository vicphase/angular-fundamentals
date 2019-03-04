import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/core/services/data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {}

  logout(): void {
    this.dataService.logout();
  }
}
