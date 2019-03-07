import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

import { Person } from '../models/person.model';

/**
 * This service is used to handle all our http requests for our people collection.
 */
@Injectable()
export class PeopleService {
  peopleUrl = environment.apiUrl.concat('/people');
  constructor(private http: HttpClient) {}

  /**
   * Gets all the people from our database.
   * @returns people
   */
  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.peopleUrl);
  }

  /**
   * Gets a person from the database by his id.
   * @param id
   * @returns person
   */
  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.peopleUrl.concat('/' + id));
  }

  /**
   * Creates a new person in our people collection.
   * @param person
   * @returns person
   */
  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.peopleUrl, person);
  }

  /**
   * Updates a person in our people collection.
   * @param person
   * @returns person
   */
  updatePerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.peopleUrl.concat('/' + person.id), person);
  }

  /**
   * Deletes a person inside our people collection.
   * @param id
   * @returns person
   */
  deletePerson(id: number): Observable<Person> {
    return this.http.delete<Person>(this.peopleUrl.concat('/' + id));
  }
}
