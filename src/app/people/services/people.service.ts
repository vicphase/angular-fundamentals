import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '@app/core/services/loading.service';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Person } from '../models/person.model';

/**
 * This service is used to handle all our http requests for our people collection.
 */
@Injectable()
export class PeopleService {
  peopleUrl = environment.apiUrl.concat('/people');
  constructor(private http: HttpClient, private loadingService: LoadingService) {}

  /**
   * Gets all the people from our database.
   * @returns people
   */
  getPeople(): Observable<Person[]> {
    this.loadingService.show();
    return this.http.get<Person[]>(this.peopleUrl).pipe(finalize(() => this.loadingService.hide()));
  }

  /**
   * Gets a person from the database by his id.
   * @param id
   * @returns person
   */
  getPerson(id: number): Observable<Person> {
    this.loadingService.show();
    return this.http
      .get<Person>(this.peopleUrl.concat('/' + id))
      .pipe(finalize(() => this.loadingService.hide()));
  }

  /**
   * Creates a new person in our people collection.
   * @param person
   * @returns person
   */
  createPerson(person: Person): Observable<Person> {
    this.loadingService.show();
    return this.http
      .post<Person>(this.peopleUrl, person)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  /**
   * Updates a person in our people collection.
   * @param person
   * @returns person
   */
  updatePerson(person: Person): Observable<Person> {
    this.loadingService.show();
    return this.http
      .put<Person>(this.peopleUrl.concat('/' + person.id), person)
      .pipe(finalize(() => this.loadingService.hide()));
  }

  /**
   * Deletes a person inside our people collection.
   * @param id
   * @returns person
   */
  deletePerson(id: number): Observable<Person> {
    this.loadingService.show();
    return this.http
      .delete<Person>(this.peopleUrl.concat('/' + id))
      .pipe(finalize(() => this.loadingService.hide()));
  }
}
