import { of } from 'rxjs';

export class LoadingServiceMock {
  loading$ = of(true);
  show = () => {};
  hide = () => {};
}
