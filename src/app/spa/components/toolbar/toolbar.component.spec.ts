import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { DataService } from '@app/core/services/data.service';
import { DataServiceMock } from '@app/tests/app-services/data.service.mock';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule],
      declarations: [ToolbarComponent],
      providers: [{ provide: DataService, useClass: DataServiceMock }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should logout', () => {
    spyOn(component['dataService'], 'logout');

    component.logout();

    expect(component['dataService'].logout).toHaveBeenCalled();
  });
});
