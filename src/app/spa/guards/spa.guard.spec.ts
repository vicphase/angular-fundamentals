import { TestBed, async, inject } from '@angular/core/testing';

import { SpaGuard } from './spa.guard';

describe('SpaGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaGuard]
    });
  });

  it('should ...', inject([SpaGuard], (guard: SpaGuard) => {
    expect(guard).toBeTruthy();
  }));
});
