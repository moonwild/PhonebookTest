import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { CustomMaterialModule } from './material';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '../../node_modules/@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CreateContactComponent } from './create-contact/create-contact.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ContactService } from './shared/contact.service';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { CreateContactCanDeactivateGuardService } from './shared/create-contact-can-deactivate-guard.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactFilterPipe } from './shared/contact-filter.pipe';
import { ContactListResolverService } from './shared/contact-list-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactDetailsGuardService } from './shared/contact-datail-guard.service';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { ContactHeaderComponent } from './contact-header/contact-header.component';
import { LogInContactComponent } from './log-in-contact/log-in-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    CreateContactComponent,
    SelectRequiredValidatorDirective,
    DisplayContactComponent,
    ContactDetailsComponent,
    ContactFilterPipe,
    PageNotFoundComponent,
    AccordionComponent,
    ContactHeaderComponent,
    LogInContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [ContactService, CreateContactCanDeactivateGuardService, ContactListResolverService, ContactDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
