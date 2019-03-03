import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

import { Person } from '../person.model';

@Injectable()
export class PeopleService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getPeople(): Observable<Person[]> {
    let requestUrl;
    environment.production
      ? (requestUrl = this.apiUrl.concat('/people.json'))
      : (requestUrl = this.apiUrl.concat('/people'));
    return this.http.get<Person[]>(requestUrl);
  }
}
