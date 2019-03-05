import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@app/people/models/person.model';
import { PeopleService } from '@app/people/services/people.service';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-people-list-container',
  templateUrl: './people-list-container.component.html',
  styleUrls: ['./people-list-container.component.scss']
})
export class PeopleListContainerComponent implements OnInit {
  people: Person[];
  filteredPeople: Person[];
  constructor(
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private peopleService: PeopleService
  ) {}

  ngOnInit() {
    this.people = this.route.snapshot.data.resolvedPeople;
    this.filteredPeople = this.people;
  }

  filterPeople(filterString: string): void {
    if (!filterString) {
      this.filteredPeople = this.people;
    } else {
      const filterValue = filterString.toLowerCase();
      this.filteredPeople = this.people.filter(
        person => person.name.toLowerCase().indexOf(filterValue) === 0
      );
    }
  }

  deletePerson(person: Person): void {
    const message = '¿Seguro que desea eliminar a la persona ' + person.name + '?';
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, { data: { message } });

    const delete$ = this.peopleService.deletePerson(person.id).pipe(
      switchMap(() =>
        this.peopleService.getPeople().pipe(
          tap(people => {
            this.people = people;
            this.filteredPeople = people;
          })
        )
      )
    );

    dialogRef
      .afterClosed()
      .pipe(
        filter(value => value),
        switchMap(() => delete$),
        take(1)
      )
      .subscribe();
  }
}
