import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleListContainerComponent } from './people-list-container.component';

describe('PeopleListContainerComponent', () => {
  let component: PeopleListContainerComponent;
  let fixture: ComponentFixture<PeopleListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleListContainerComponent ]
    })
    .compileComponents();
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
