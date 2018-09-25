import { CanDeactivate } from '../../../node_modules/@angular/router';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class CreateContactCanDeactivateGuardService implements CanDeactivate<CreateContactComponent> {
    // returns true or false. True to allow navigation away from the route. False to prevent navigation.
    canDeactivate(component: CreateContactComponent): boolean {
        if (component.createContactForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    }
}
