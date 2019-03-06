import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [DataService]
    });
    service = TestBed.get(DataService);
  });

  it('should save the login status in localstorage and redirect to spa', () => {
    spyOn(localStorage, 'setItem').and.callFake(() => {});
    spyOn(service['router'], 'navigateByUrl').and.callFake(() => {});

    service.login();

    expect(localStorage.setItem).toHaveBeenCalledWith('logged', 'true');
    expect(service['router'].navigateByUrl).toHaveBeenCalledWith('/spa');
  });

  it('should save the logout status in localstorage and redirect to auth', () => {
    spyOn(localStorage, 'setItem').and.callFake(() => {});
    spyOn(service['router'], 'navigateByUrl').and.callFake(() => {});

    service.logout();

    expect(localStorage.setItem).toHaveBeenCalledWith('logged', 'false');
    expect(service['router'].navigateByUrl).toHaveBeenCalledWith('/auth');
  });

  it('should return true if used is logged int', () => {
    spyOn(localStorage, 'getItem').and.returnValue('true');

    expect(service.isLogged()).toBeTruthy();
  });
});
