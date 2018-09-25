import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { CreateContactCanDeactivateGuardService } from './shared/create-contact-can-deactivate-guard.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListResolverService } from './shared/contact-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailsGuardService } from './shared/contact-datail-guard.service';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { LogInContactComponent } from './log-in-contact/log-in-contact.component';

const routes: Routes = [
  {
    path: 'header', component: ContactHeaderComponent,
  },
  {
    path: 'list', component: ListContactsComponent,
    resolve: { contactList: ContactListResolverService }
  },
  {
    path: 'log', component: LogInContactComponent,
  },
  {
    path: 'edit/:id', component: CreateContactComponent,
    canDeactivate: [CreateContactCanDeactivateGuardService]
  },
  {
    path: 'contacts/:id', component: ContactDetailsComponent, canActivate: [ContactDetailsGuardService]
  },
  {
    path: '', redirectTo: '/header', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
