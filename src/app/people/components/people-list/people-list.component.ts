import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '@app/people/models/person.model';

/**
 * Presentational component that displays the list of people inside our application.
 */
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {
  @Input() people: Person[] = [];
  listFilter: string;
  @Output() filterItems: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<Person> = new EventEmitter();

  /**
   * Emits the filter value to filter people inside our list.
   * The filtering is handled by the people-list-container component.
   * @param filter
   */
  onFilterChange(filter: string): void {
    this.filterItems.emit(filter);
  }

  /**
   * Emits a person that will be deleted from the list.
   * The delete is handled by the people-list-container component.
   * @param person
   */
  onDelete(person: Person): void {
    this.delete.emit(person);
  }
}
