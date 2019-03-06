import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

import { Person } from '../models/person.model';

@Injectable()
export class PeopleService {
  peopleUrl = environment.apiUrl.concat('/people');
  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.peopleUrl.concat('/' + id));
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person);
  }

  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.peopleUrl.concat('/' + person.id), person);
  }

  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(this.peopleUrl.concat('/' + id));
  }
}
