import { TestBed } from '@angular/core/testing';

import { PeopleResolverService } from './people-resolver.service';

describe('PeopleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleResolverService = TestBed.get(PeopleResolverService);
    expect(service).toBeTruthy();
  });
});
