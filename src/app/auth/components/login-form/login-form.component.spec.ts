import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit the form if valid', () => {
    spyOn(component.formSubmit, 'emit');
    component.form.patchValue({
      email: 'email@test.com',
      password: 'test'
    });

    component.submit();

    expect(component.formSubmit.emit).toHaveBeenCalledWith(component.form.value);
  });

  it('should mark the form as touched on submit if form is invalid', () => {
    component.submit();

    expect(component.form.touched).toBeTruthy();
  });
});
