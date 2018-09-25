import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '../../../node_modules/@angular/router';
import { Contact } from '../models/contact.model';
import { Observable, of } from '../../../node_modules/rxjs';
import { ContactService } from './contact.service';
import { Injectable } from '../../../node_modules/@angular/core';
import { map, catchError } from 'rxjs/operators';


// если Resolver является потребителем Observable, то подписываться не надо Resolver автоматически это сделает
@Injectable()
export class ContactListResolverService implements Resolve<Contact[] | string> {
    constructor(private contactService: ContactService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact[] | string> {
        return this.contactService.getContacts()
            .pipe(
                catchError((err: string) => of(err))
            );
    }
}
