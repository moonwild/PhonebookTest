import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '../../../node_modules/@angular/router';
import { ContactService } from './contact.service';
import { Injectable } from '../../../node_modules/@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class ContactDetailsGuardService implements CanActivate {
    constructor(private contactService: ContactService, private router: Router) {

    }
    // Method return true if route can be activated, otherwise - false
    // Если контакт  с определенным id есть то, возвр true и выводим его
    // Если нет, то redirect on page not found и возвр false and route not acvivated


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        // +route.paramMap.get('id') - получает id из url
        return this.contactService.getContact(+route.paramMap.get('id')).pipe(
            map(contact => {
                const contactExists = !!contact;
                if (contactExists) {
                    return true;
                } else {
                    this.router.navigate(['notfound']);
                    return false;
                }
            }),
            catchError((err) => {
                console.log(err);
                return of(false);
            })
        );

    }
}
