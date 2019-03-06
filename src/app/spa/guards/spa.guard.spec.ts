import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '@app/core/services/data.service';

import { SpaGuard } from './spa.guard';

describe('SpaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SpaGuard, { provide: DataService, useValue: {} }]
    });
  });

  it('should ...', inject([SpaGuard], (guard: SpaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
