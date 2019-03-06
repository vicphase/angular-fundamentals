import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from './error-state-matcher';

describe('MyErrorStateMatcher', () => {
  let myErrorStateMatcher: MyErrorStateMatcher;
  beforeEach(() => {
    myErrorStateMatcher = new MyErrorStateMatcher();
  });

  it('should return false if the control doest not exist', () => {
    expect(myErrorStateMatcher.isErrorState(null, null)).toBeFalsy();
  });

  it('should return true if control is invalid and touced', () => {
    const formBuilder = new FormBuilder();
    const form = formBuilder.group({
      name: ['', Validators.required]
    });
    const control =  form.get('name') as FormControl;
    control.markAsTouched();

    expect(myErrorStateMatcher.isErrorState(control, null)).toBeTruthy();
  });
});
