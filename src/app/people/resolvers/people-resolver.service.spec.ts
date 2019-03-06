import { TestBed } from '@angular/core/testing';

import { PeopleService } from '../services/people.service';
import { PeopleResolverService } from './people-resolver.service';

describe('PeopleResolverService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PeopleResolverService, { provide: PeopleService, useValue: {} }]
    }));

  it('should be created', () => {
    const service: PeopleResolverService = TestBed.get(PeopleResolverService);
    expect(service).toBeTruthy();
  });
});
