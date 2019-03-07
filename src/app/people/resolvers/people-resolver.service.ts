import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';

/**
 * Resolver used to obtain the people from our people service.
 * If getPeople functions fails the user is not able to see the people-list-container component.
 */
@Injectable()
export class PeopleResolverService implements Resolve<Person[]> {
  constructor(private peopleService: PeopleService) {}

  resolve(): Observable<Person[]> {
    return this.peopleService.getPeople();
  }
}
