import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '@app/auth/models/login-request.model';
import { MyErrorStateMatcher } from '@app/shared/classes/error-state-matcher';

/**
 * Presentational component to enter the data of a login session
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {
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

  /**
   * If form is valid sends the form value in the formSubmit output to be used by the parent login-form-container
   * else marks the form as touched to display the error messages
   */
  submit() {
    this.form.valid ? this.formSubmit.emit(this.form.value) : this.form.markAsTouched();
  }
}
