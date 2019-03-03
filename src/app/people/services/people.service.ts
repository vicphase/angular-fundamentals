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
    return this.http.get<Person[]>(this.apiUrl.concat('/people'));
  }
}
