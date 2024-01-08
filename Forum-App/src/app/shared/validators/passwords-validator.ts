import { FormGroup, ValidatorFn } from '@angular/forms';

export function passwordsValidator(
  passOne: string,
  passTwo: string
): ValidatorFn {
  return (control) => {
    const group = control as FormGroup;
    const pass1 = group.get(passOne);
    const pass2 = group.get(passTwo);

    return pass1?.value === pass2?.value 
	? null 
	: { passwordsValidator: true };
  };
}
