import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { GroupName } from '../models/groupname.model';
import { ContactService } from '../shared/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  // @ViewChild необходим для того, чтобы TemplateReferenceVariable из html можно было использовать в этом классе
  // Далее используем его как с-во для гарда canDeactivate, чтобы узнать dirty form or not, а также reset form
  @ViewChild('contactForm') public createContactForm: NgForm;

  panelTitle: string;

  previewPhoto = false;

  contact: Contact;

  groups: GroupName[] = [
    { id: 1, groupname: 'Work' },
    { id: 2, groupname: 'Family' },
    { id: 3, groupname: 'Friend' },
    { id: 4, groupname: 'Study' },
  ];

  constructor(private _contactService: ContactService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getContact(id);
    });
  }

  private getContact(id: number) {
    if (id === 0) {
      this.contact = {
        id: null,
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        group: null,
        photoPath: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
      };
      this.panelTitle = 'Create contact';
      this.createContactForm.reset();
    } else {
      this.panelTitle = 'Edit contact';
      this._contactService.getContact(id).subscribe(
        (contact) => this.contact = contact,
        (err: any) => console.log(err)
      );
    }
  }

  saveNgSubmitContact(): void {
    if (this.contact.id == null) {
      this._contactService.saveContact(this.contact).subscribe(
        (data: Contact) => {
          // log the employee object after the post is completed
          console.log(data);
          this.createContactForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }

      );

    } else {
      this._contactService.updateContact(this.contact).subscribe(
        () => {
          this.createContactForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => { console.log(error); }

      );

    }

  }

  // S Servisa
  // saveNgSubmitContact(): void {
  // Делаем копию this.contact, чтобы при ресете формы свойства были не null. Затем  const=newContact передаем на сохранение в сервис
  // const newContact: Contact = Object.assign({}, this.contact);
  // this._contactService.saveContact(newContact);
  // Используем переменную из ViewChild, которая дает доступ к форме и ресетим ее, чтобы при saveNgSubmitContact не зап canDeactivateGuard
  // В reset можно поместить объект reset({ contactPreference: 'phone'}), который выст-т дефолт. з-ния после отпр. формы, если не перенапр
  //   this.createContactForm.reset();
  //   this._router.navigate(['list']);
  // }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

}
