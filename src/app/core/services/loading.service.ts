import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service that handles the show/hide status of our loading component
 */
@Injectable()
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
