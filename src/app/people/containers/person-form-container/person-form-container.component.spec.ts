import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Person } from '@app/people/models/person.model';
import { PeopleService } from '@app/people/services/people.service';
import { PeopleServiceMock } from '@app/tests/app-services/people.service.mock';
import { of } from 'rxjs';

import { PersonFormContainerComponent } from './person-form-container.component';

describe('PersonFormContainerComponent', () => {
  let component: PersonFormContainerComponent;
  let fixture: ComponentFixture<PersonFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PersonFormContainerComponent],
      providers: [{ provide: PeopleService, useClass: PeopleServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update the person if id exists', () => {
    const person: Person = {
      id: 2,
      name: 'test',
      dateOfBirth: null
    };
    spyOn(component['peopleService'], 'updatePerson').and.returnValue(of({}));
    spyOn(component['router'], 'navigateByUrl').and.callFake(() => {});

    component.submit(person);

    expect(component['peopleService'].updatePerson).toHaveBeenCalledWith(person);
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/spa');
  });

  it('should create the person if id does not exists', () => {
    const person: Person = {
      name: 'test',
      dateOfBirth: null
    };
    spyOn(component['peopleService'], 'createPerson').and.returnValue(of({}));
    spyOn(component['router'], 'navigateByUrl').and.callFake(() => {});

    component.submit(person);

    expect(component['peopleService'].createPerson).toHaveBeenCalledWith(person);
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/spa');
  });
});
