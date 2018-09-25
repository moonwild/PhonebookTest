import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;

  // Include a private field _id to keep track of the route parameter value
  private _id: number;
  listContacts;

  constructor(private _activatedRoute: ActivatedRoute, private _contactService: ContactService, private _router: Router) { }

  ngOnInit() {
    // Применять snapshot, если параметры читаются и не меняются
    // Применять observable, если значение параметров меняется и необходимо что-то выполнить при этом
    // Отписываться не надо activatedroute делает это сам

    // Extract the route parameter value and retrieve that specific contact details using the ContactService
    // this._id = + this.activatedRoute.snapshot.paramMap.get('id');
    // this.contact = this.contactService.getContact(this._id);

    // The paramMap property returns an Observable. So subscribe to it if you want to react and execute some piece of code
    // in response to the route parameter value changes
    this._activatedRoute.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this._contactService.getContact(this._id).subscribe(
        (contact) => this.contact = contact,
        (err: any) => console.log(err)
      );
    });
  }

  // Everytime this method is called the contact id value is incremented by 1 and then
  // redirected to the same route but with a different id parameter value
  viewNextContact() {
    // if (this._id < this._contactService.listContacts.length) {
    //   this._id = this._id + 1;
    // } else {
    //   this._id = 1;
    // }
    this._router.navigate(['/contacts', this._id], {
      queryParamsHandling: 'preserve'
    });

  }

}
