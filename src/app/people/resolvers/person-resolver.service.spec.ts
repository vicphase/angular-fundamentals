import { TestBed } from '@angular/core/testing';
import { PeopleServiceMock } from '@app/tests/app-services/people.service.mock';
import { of } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';

import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';
import { PersonResolverService } from './person-resolver.service';

describe('PersonResolverService', () => {
  let service: PersonResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonResolverService, { provide: PeopleService, useClass: PeopleServiceMock }]
    });
    service = TestBed.get(PersonResolverService);
  });

  it('should return the people list from people service', () => {
    const personMock: Person = { id: 2, name: 'test' };
    spyOn(service['peopleService'], 'getPerson').and.returnValue(of(personMock));

    const activatedRouteMock = { params: { id: 1 } };

    service
      .resolve(activatedRouteMock as any)
      .pipe(tap(person => expect(person).toEqual(personMock)))
      .subscribe();
  });
});
