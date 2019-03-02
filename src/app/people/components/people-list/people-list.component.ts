import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '@app/people/person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit {
  @Input() people: Person[] = [];
  listFilter: string;
  @Output() filterItems: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onFilterChange(filter: string): void {
    this.filterItems.emit(filter);
  }
}
