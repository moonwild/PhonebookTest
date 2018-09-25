import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ResolvedContactList } from '../models/resolved-contactlist.model';


@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})
export class ListContactsComponent implements OnInit {
  contacts: Contact[];
  filteredContacts: Contact[];
  error: string;

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(searchString: string) {
    this._searchTerm = searchString;
    this.filteredContacts = this.filterContacts(searchString);
  }

  // indexOf return -1 if searchString not found in contact.name
  // If searchTerm is found it will return number other then -1
  filterContacts(searchString: string) {
    return this.contacts.filter(contact =>
      contact.lastName.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1);
  }

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    const resolvedData: Contact[] | string = this._activatedRoute.snapshot.data['contactList'];
    if (Array.isArray(resolvedData)) {
      this.contacts = resolvedData;
    } else {
      this.error = resolvedData;
    }
    if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
    } else {
      // В начале fitered пустой, поэтому инициализируем его как полный массив contacts
      this.filteredContacts = this.contacts;
    }
  }

  onDeleteNotification(id: number) {
    const i = this.filteredContacts.findIndex(cont => cont.id === id);
    if (i !== -1) {
      this.filteredContacts.splice(i, 1);
    }
  }

  ngOnInit() {
    // this.contacts = this.contactService.getContacts();

    // this.contactService.getContacts().subscribe(contList => this.contacts = contList);



  }


}
