import { PipeTransform, Pipe } from '../../../node_modules/@angular/core';
import { Contact } from '../models/contact.model';

@Pipe({
    name: 'contactFilter',
    pure: false
})
export class ContactFilterPipe implements PipeTransform {
    // Первый параметр - то что будем фильтровать-Contact[], второй-searchTerm
    transform(contacts: Contact[], searchTerm: string): Contact[] {
        if (!contacts || !searchTerm) {
            return contacts;
        } else {
            return contacts.filter(contact =>
                contact.lastName.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
        }
    }
}
