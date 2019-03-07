import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '@app/core/services/loading.service';

/**
 * Components that displays the loading component if the loading service returns a true value
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading$: Observable<boolean>;
  constructor(private loadingService: LoadingService) {}

  /**
   * Here we get the loading status from the loading service
   */
  ngOnInit() {
    this.loading$ = this.loadingService.loading$;
  }
}
