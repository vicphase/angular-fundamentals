import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from '@app/core/services/data.service';
import { DataServiceMock } from '@app/tests/app-services/data.service.mock';

import { LoginFormContainerComponent } from './login-form-container.component';

describe('LoginFormContainerComponent', () => {
  let component: LoginFormContainerComponent;
  let fixture: ComponentFixture<LoginFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormContainerComponent],
      providers: [{ provide: DataService, useClass: DataServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should login', () => {
    spyOn(component['dataService'], 'login');

    component.login();

    expect(component['dataService'].login).toHaveBeenCalled();
  });
});
