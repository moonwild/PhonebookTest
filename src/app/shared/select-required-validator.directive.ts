import { Validator, AbstractControl, NG_VALIDATORS } from '../../../node_modules/@angular/forms';
import { Directive, Input } from '../../../node_modules/@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})

export class SelectRequiredValidatorDirective implements Validator {
    // Созд. input property чтобы из template забрать option value

    // tslint:disable-next-line:no-input-rename
    @Input('appSelectValidator') defaultValue: string;

    // AbstractControl Parent class for formgroup and formcontrol
    // Return null if validation succeed or object if error
    // if returning object it assining key defaultSelected to the arrorsCollection selectElement Now can use defaultSelected in template
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }
}
