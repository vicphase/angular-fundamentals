import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PersonFormComponent } from './person-form.component';

describe('PersonFormComponent', () => {
  let component: PersonFormComponent;
  let fixture: ComponentFixture<PersonFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PersonFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should patch the form if person exists', () => {
    component.person = {
      id: 2,
      name: 'test',
      dateOfBirth: null
    };

    component.ngOnChanges();

    expect(component.form.get('name').value).toEqual(component.person.name);
  });

  it('should not patch the form if person does not exists', () => {
    spyOn(component.form, 'patchValue');
    component.person = null;

    component.ngOnChanges();

    expect(component.form.patchValue).not.toHaveBeenCalledWith(component.person);
  });

  it('should submit the form if valid', () => {
    spyOn(component.formSubmit, 'emit');
    component.form.patchValue({
      name: 'email@test.com'
    });

    component.submit();

    expect(component.formSubmit.emit).toHaveBeenCalledWith(component.form.value);
  });

  it('should mark the form as touched on submit if form is invalid', () => {
    component.submit();

    expect(component.form.touched).toBeTruthy();
  });
});
