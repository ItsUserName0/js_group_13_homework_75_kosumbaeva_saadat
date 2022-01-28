import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

export const phoneValidator = (control: AbstractControl): ValidationErrors | null => {
  const validPassword = /^\d*[a-zA-Z][a-zA-Z\d]*$/.test(control.value);
  if (validPassword) {
    return null;
  }
  return {password: true};
}

@Directive({
  selector: '[appPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidatePasswordDirective,
    multi: true
  }]
})
export class ValidatePasswordDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return phoneValidator(control);
  }
}
