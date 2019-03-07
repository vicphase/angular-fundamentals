import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '@app/people/models/person.model';
import { PeopleService } from '@app/people/services/people.service';
import { take, tap } from 'rxjs/operators';

/**
 * Container component used to handle the create or update of a person.
 */
@Component({
  selector: 'app-person-form-container',
  templateUrl: './person-form-container.component.html',
  styleUrls: ['./person-form-container.component.scss']
})
export class PersonFormContainerComponent implements OnInit {
  person: Person;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private peopleService: PeopleService
  ) {}

  /**
   * Obtains the person from the PersonResolverService.
   */
  ngOnInit() {
    this.person = this.route.snapshot.data.resolvedPerson;
  }

  /**
   * If the person has an id it means he is already in the database and calls an update function.
   * Else a new person is created.
   * @param person Person obtained from the person-form component.
   */
  submit(person: Person): void {
    if (person.id) {
      this.peopleService
        .updatePerson(person)
        .pipe(
          tap(() => this.router.navigateByUrl('/spa')),
          take(1)
        )
        .subscribe();
    } else {
      this.peopleService
        .createPerson(person)
        .pipe(
          tap(() => this.router.navigateByUrl('/spa')),
          take(1)
        )
        .subscribe();
    }
  }

}
