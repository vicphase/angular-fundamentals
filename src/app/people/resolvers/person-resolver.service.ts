import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';

/**
 * Resolver used to obtain a person from our people service.
 * If getPerson functions fails the user is not able to see the people-form-container component.
 */
@Injectable()
export class PersonResolverService implements Resolve<Person> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    const id = +route.params.id;
    return this.peopleService.getPerson(id);
  }
}
