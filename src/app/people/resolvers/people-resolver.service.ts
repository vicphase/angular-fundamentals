import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Person } from '../person.model';
import { PeopleService } from '../services/people.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleResolverService implements Resolve<Person[]> {
  constructor(private peopleService: PeopleService) {}

  resolve(): Observable<Person[]> {
    return this.peopleService.getPeople();
  }
}
