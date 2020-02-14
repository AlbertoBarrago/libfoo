import {AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

	static format(control: AbstractControl): ValidationErrors | null {
		const validationRegex:RegExp = RegExp('^[0-9A-Za-z]{8,}$');
		let validate = validationRegex.test(control.value);
		return validate ? null : { 'pwd-bad-format': true };
	}

	static match(pwdControl: AbstractControl) {
		return (control: AbstractControl): ValidationErrors | null => {
			let pwd = pwdControl.value;
			let confirmPwd = control.value;
			let validate = pwd === confirmPwd;
			return validate ? null : { 'pwd-match': true };
		}
	}

}


