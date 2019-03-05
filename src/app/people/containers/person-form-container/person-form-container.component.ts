import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '@app/people/models/person.model';
import { PeopleService } from '@app/people/services/people.service';
import { take, tap } from 'rxjs/operators';

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

  ngOnInit() {
    this.person = this.route.snapshot.data.resolvedPerson;
  }

  submit(person: Person): void {
    this.peopleService
      .createPerson(person)
      .pipe(
        tap(() => this.router.navigateByUrl('/spa')),
        take(1)
      )
      .subscribe();
  }
}
