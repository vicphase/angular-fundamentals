import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '@app/core/services/data.service';
import { DataServiceMock } from '@app/tests/app-services/data.service.mock';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthGuard, { provide: DataService, useClass: DataServiceMock }]
    });

    guard = TestBed.get(AuthGuard);
  });

  it('should return to /spa path if user is logged in', () => {
    spyOn(guard['dataService'], 'isLogged').and.returnValue(true);
    spyOn(guard['router'], 'navigateByUrl').and.callFake(() => {});

    expect(guard.canActivate()).toBeFalsy();
    expect(guard['router'].navigateByUrl).toHaveBeenCalledWith('/spa');
  });

  it('should return true if user is not logged in', () => {
    spyOn(guard['dataService'], 'isLogged').and.returnValue(false);

    expect(guard.canActivate()).toBeTruthy();
  });
});
