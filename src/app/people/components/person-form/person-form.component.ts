import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '@app/people/models/person.model';
import { MyErrorStateMatcher } from '@app/shared/classes/error-state-matcher';

/**
 * Presentational component used to update or create a person.
 */
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnChanges {
  @Input() person: Person;
  form: FormGroup;
  matcher = new MyErrorStateMatcher();
  @Output() formSubmit: EventEmitter<Person> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.required],
      dateOfBirth: ['']
    });
  }

  /**
   * If a person exists the form is populated with the value to edit it
   */
  ngOnChanges() {
    if (this.person) {
      this.form.patchValue(this.person);
      this.form.get('dateOfBirth').patchValue(new Date(this.person.dateOfBirth));
    }
  }

  /**
   * If form is valid sends the form value in the formSubmit output to be used by the parent person-form-container
   * else marks the form as touched to display the error messages
   */
  submit(): void {
    this.form.valid ? this.formSubmit.emit(this.form.value) : this.form.markAsTouched();
  }
}
