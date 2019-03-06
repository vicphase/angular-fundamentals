import { TestBed } from '@angular/core/testing';

import { PeopleService } from '../services/people.service';
import { PersonResolverService } from './person-resolver.service';

describe('PersonResolverService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PersonResolverService, { provide: PeopleService, useValue: {} }]
    }));

  it('should be created', () => {
    const service: PersonResolverService = TestBed.get(PersonResolverService);
    expect(service).toBeTruthy();
  });
});
