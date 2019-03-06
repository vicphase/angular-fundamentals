import { ScrollingModule } from '@angular/cdk/scrolling';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyPipe } from '@app/shared/pipes/empty.pipe';

import { PeopleListComponent } from './people-list.component';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScrollingModule],
      declarations: [PeopleListComponent, EmptyPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
