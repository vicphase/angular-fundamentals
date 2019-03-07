import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { LoadingService } from '@app/core/services/loading.service';
import { LoadingServiceMock } from '@app/tests/app-services/loading.service.mock';

import { Person } from '../models/person.model';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpTestingControler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PeopleService, { provide: LoadingService, useClass: LoadingServiceMock }]
    });

    service = TestBed.get(PeopleService);
    httpTestingControler = TestBed.get(HttpTestingController);
  });

  it('should get the people', () => {
    const response: Person[] = [];

    service.getPeople().subscribe(people => {
      expect(people).toEqual(response);
    });

    const req = httpTestingControler.expectOne(service.peopleUrl);
    req.flush(response);
  });

  it('should get a person', () => {
    const response: Person = {
      id: 2,
      name: 'test',
      dateOfBirth: null
    };

    service.getPerson(2).subscribe(person => {
      expect(person).toEqual(response);
    });

    const req = httpTestingControler.expectOne(service.peopleUrl.concat('/2'));
    req.flush(response);
  });

  it('should create a persom', () => {
    const personRequest: Person = {
      name: 'test',
      dateOfBirth: null
    };

    service.createPerson(personRequest).subscribe(person => {
      expect(person).toEqual(personRequest);
    });

    const req = httpTestingControler.expectOne(service.peopleUrl);
    req.flush(personRequest);
  });

  it('should update a persom', () => {
    const personRequest: Person = {
      id: 2,
      name: 'test',
      dateOfBirth: null
    };

    service.updatePerson(personRequest).subscribe(person => {
      expect(person).toEqual(personRequest);
    });

    const req = httpTestingControler.expectOne(service.peopleUrl.concat('/' + personRequest.id));
    req.flush(personRequest);
  });

  it('should delete a person', () => {
    const response: Person = {
      id: 2,
      name: 'test',
      dateOfBirth: null
    };

    service.deletePerson(response.id).subscribe(person => {
      expect(person).toEqual(response);
    });

    const req = httpTestingControler.expectOne(service.peopleUrl.concat('/' + response.id));
    req.flush(response);
  });
});
