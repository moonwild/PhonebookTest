import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ContactService } from '../shared/contact.service';


@Component({
  selector: 'app-display-contact',
  templateUrl: './display-contact.component.html',
  styleUrls: ['./display-contact.component.scss']
})
export class DisplayContactComponent implements OnInit {
  // Parent component listContact will use this Input property to pass the contact object Now we can use it in viewTemplate displayContact
  @Input() contact: Contact;

  @Input() searchTerm: string;

  selectedContact: number;

  // This output event will be used to notify parent component i.e ListContactsComponent when an contact is deleted.
  // So the ListContactsComponent can delete that respective contact from the filteredContacts array to which the template is bound
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  // This property is used in the view template to show and hide delete confirmation
  confirmDelete = false;


  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _contactService: ContactService) { }

  ngOnInit() {
    // Читаем optional parametr value. То, что мы передаем как опциональный параметр в строке /list;id=3
    this.selectedContact = +this._activatedRoute.snapshot.paramMap.get('id');
  }


  // М-д по клику переход на контакт с определенным id
  viewContact() {
    this._router.navigate(['/contacts', this.contact.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  editContact() {
    this._router.navigate(['/edit', this.contact.id]);
  }

  // Call the ContactService delete method and raise notifyDelete event,
  // So the ListContactsComponent can delete the same contact from it's filtered list array
  //   deleteContact() {
  //     this._contactService.deleteContact(this.contact.id).subscribe(
  //       () => console.log('Contact deleted')
  //     );
  //     this.notifyDelete.emit(this.contact.id);
  //   }
  // }

  // S servisa
  // deleteContact() {
  //   this._contactService.deleteContact(this.contact.id);
  //   this.notifyDelete.emit(this.contact.id);
  // }

  deleteContact() {
    this._contactService.deleteContact(this.contact.id).subscribe(
      () => console.log(`Contact with id = ${this.contact.id} deleted`),
      (err) => console.log(err)
    );
    this.notifyDelete.emit(this.contact.id);
  }
}

