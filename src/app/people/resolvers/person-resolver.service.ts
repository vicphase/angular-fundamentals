import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../models/person.model';
import { PeopleService } from '../services/people.service';

@Injectable()
export class PersonResolverService implements Resolve<Person> {
  constructor(private peopleService: PeopleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Person> {
    const id = +route.params.id;
    return this.peopleService.getPerson(id);
  }
}
