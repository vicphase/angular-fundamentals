import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@app/people/models/person.model';
import { PeopleService } from '@app/people/services/people.service';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { filter, switchMap, take, tap } from 'rxjs/operators';

/**
 * Container component to handle all information inside our people list.
 * Filters people in the list and handles the delete of a person too.
 */
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

  /**
   * Obtains the people from the PeopleResolverService.
   */
  ngOnInit() {
    this.people = this.route.snapshot.data.resolvedPeople;
    this.filteredPeople = this.people;
  }

  /**
   * Filters people by their name
   * @param filterString String obtained from our searchbar in the people-list component.
   */
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

  /**
   * Opens a confirm dialog before deleting the person.
   * @param person
   */
  deletePerson(person: Person): void {
    const message = '¿Seguro que desea eliminar a la persona ' + person.name + '?';
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, { data: { message } });

    dialogRef
      .afterClosed()
      .pipe(
        filter(value => value),
        switchMap(() =>
          this.peopleService.deletePerson(person.id).pipe(
            switchMap(() =>
              this.peopleService.getPeople().pipe(
                tap(people => {
                  this.people = people;
                  this.filteredPeople = people;
                })
              )
            )
          )
        ),
        take(1)
      )
      .subscribe();
  }
}
