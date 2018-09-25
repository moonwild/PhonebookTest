import { Injectable } from '../../../node_modules/@angular/core';
import { Contact } from '../models/contact.model';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { catchError } from 'rxjs/operators';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';





@Injectable()
export class ContactService {

    constructor(private _httpClient: HttpClient) { }

    // listContacts: Contact[] = [
    //     {
    //         id: 1,
    //         firstName: 'Luna',
    //         lastName: 'MainBeautifulPony',
    //         email: 'luna@test.com',
    //         phoneNumber: 555,
    //         contactPreference: 'Phone',
    //         dateOfBirth: new Date('9/17/1877'),
    //         group: '1',
    //         photoPath: 'assets/images/luna.jpg'
    //     },
    //     {
    //         id: 2,
    //         firstName: 'Somepony',
    //         lastName: 'Greatpony',
    //         email: 'somepony@test.com',
    //         phoneNumber: 666,
    //         contactPreference: 'Email',
    //         dateOfBirth: new Date('6/20/1777'),
    //         group: '3',
    //         photoPath: 'assets/images/somepony.jpg'
    //     },
    //     {
    //         id: 3,
    //         firstName: 'Sparkle',
    //         lastName: 'Elegantpony',
    //         email: 'sparkle@test.com',
    //         phoneNumber: 777,
    //         contactPreference: 'Phone',
    //         dateOfBirth: new Date('5/12/1888'),
    //         group: '4',
    //         photoPath: 'assets/images/sparkle.jpg'
    //     },
    // ];



    baseUrl = 'http://localhost:3000/contacts';

    getContacts(): Observable<Contact[]> {
        // return of(this.listContacts).pipe(delay(2000));
        return this._httpClient.get<Contact[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.log('Client Side Error: ', errorResponse.error.message);
        } else {
            console.error('Server Side Error ', errorResponse);
        }

        return Observable.throw('There is a problem with the service.We working on it. Please try again later');
    }

    getContact(id: number): Observable<Contact> {
        // return this.listContacts.find(cont => cont.id === id);
        return this._httpClient.get<Contact>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    // s servisa
    // saveContact(contact: Contact) {
    //     if (contact.id === null) {
    //         const maxid = this.listContacts.reduce(function (e1, e2) {
    //             return (e1.id > e2.id) ? e1 : e2;
    //         }).id;
    //         contact.id = maxid + 1;
    //         this.listContacts.push(contact);
    //     } else {
    //         const foundIndex = this.listContacts.findIndex(e => e.id === contact.id);
    //         this.listContacts[foundIndex] = contact;
    //     }
    // }

    saveContact(contact: Contact): Observable<Contact> {
        return this._httpClient.post<Contact>(this.baseUrl, contact, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .pipe(catchError(this.handleError));

    }

    updateContact(contact: Contact): Observable<void> {
        return this._httpClient.put<void>(`${this.baseUrl}/${contact.id}`, contact, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .pipe(catchError(this.handleError));
    }


    deleteContact(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    // s servisa
    // deleteContact(id: number) {
    //     const i = this.listContacts.findIndex(cont => cont.id === id);
    //     if (i !== -1) {
    //         this.listContacts.splice(i, 1);
    //     }
    // }

}
