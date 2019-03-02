import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '@app/auth/models/login-request.model';
import { MyErrorStateMatcher } from '@app/shared/classes/error-state-matcher';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  title = 'Angular Fundamentals';
  form: FormGroup;
  matcher = new MyErrorStateMatcher();

  @Output() formSubmit: EventEmitter<LoginRequest> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  submit() {
    this.form.valid ? this.formSubmit.emit(this.form.value) : this.form.markAsTouched();
  }
}
