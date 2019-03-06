import { TestBed } from '@angular/core/testing';
import { PeopleServiceMock } from '@app/tests/app-services/people.service.mock';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';
import { PeopleResolverService } from './people-resolver.service';

describe('PeopleResolverService', () => {
  let service: PeopleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeopleResolverService, { provide: PeopleService, useClass: PeopleServiceMock }]
    });
    service = TestBed.get(PeopleResolverService);
  });

  it('should return the people list from people service', () => {
    const peopleMock: Person[] = [{ id: 2, name: 'test' }];
    spyOn(service['peopleService'], 'getPeople').and.returnValue(of(peopleMock));

    service
      .resolve()
      .pipe(tap(people => expect(people).toEqual(peopleMock)))
      .subscribe();
  });
});
