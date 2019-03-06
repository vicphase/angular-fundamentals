import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaComponent } from './spa.component';

describe('SpaComponent', () => {
  let component: SpaComponent;
  let fixture: ComponentFixture<SpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
