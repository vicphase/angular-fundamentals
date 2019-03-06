import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from '@app/people/services/people.service';

import { PeopleListContainerComponent } from './people-list-container.component';

describe('PeopleListContainerComponent', () => {
  let component: PeopleListContainerComponent;
  let fixture: ComponentFixture<PeopleListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PeopleListContainerComponent],
      providers: [{ provide: MatDialog, useValue: {} }, { provide: PeopleService, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
