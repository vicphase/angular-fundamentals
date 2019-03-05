import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '@app/people/models/person.model';
import { MyErrorStateMatcher } from '@app/shared/classes/error-state-matcher';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit, OnChanges {
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

  ngOnInit() {}

  ngOnChanges() {
    if (this.person) {
      this.form.patchValue(this.person);
      this.form.get('dateOfBirth').patchValue(new Date(this.person.dateOfBirth));
    }
  }

  submit(): void {
    this.form.valid ? this.formSubmit.emit(this.form.value) : this.form.markAsTouched();
  }
}
