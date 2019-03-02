import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '@app/people/person.model';

@Component({
  selector: 'app-people-list-container',
  templateUrl: './people-list-container.component.html',
  styleUrls: ['./people-list-container.component.scss']
})
export class PeopleListContainerComponent implements OnInit {
  people: Person[];
  filteredPeople: Person[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.people = this.route.snapshot.data.resolvedPeople;
    this.filteredPeople = this.people;
  }

  filterPeople(filter: string): void {
    if (!filter) {
      this.filteredPeople = this.people;
    } else {
      const filterValue = filter.toLowerCase();
      this.filteredPeople = this.people.filter(
        person => person.name.toLowerCase().indexOf(filterValue) === 0
      );
    }
  }
}
