import { Contact } from './contact.model';

export class ResolvedContactList {
    constructor(public contactList: Contact[], public error: any = null) {

    }
}
