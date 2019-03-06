import { of } from 'rxjs';

export class PeopleServiceMock {
  getPeople = () => of([]);
  getPerson = () => of({});
  createPerson = () => of({});
  updatePerson = () => of({});
  deletePerson = () => of({});
}
