import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '@app/core/services/data.service';
import { DataServiceMock } from '@app/tests/app-services/data.service.mock';

import { SpaGuard } from './spa.guard';

describe('SpaGuard', () => {
  let guard: SpaGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SpaGuard, { provide: DataService, useClass: DataServiceMock }]
    });

    guard = TestBed.get(SpaGuard);
  });

  it('should return to /auth path if user is not logged in', () => {
    spyOn(guard['dataService'], 'isLogged').and.returnValue(false);
    spyOn(guard['router'], 'navigateByUrl').and.callFake(() => {});

    expect(guard.canActivate()).toBeFalsy();
    expect(guard['router'].navigateByUrl).toHaveBeenCalledWith('/auth');
  });

  it('should return true if user is logged in', () => {
    spyOn(guard['dataService'], 'isLogged').and.returnValue(true);

    expect(guard.canActivate()).toBeTruthy();
  });
});
