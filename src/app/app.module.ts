import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/header/nav/nav.component';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { AboutComponent } from './components/about/about.component';
import { CpbComponent } from './components/concepts/cpb/cpb.component';
import { CebComponent } from './components/concepts/ceb/ceb.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AddContactComponent } from './Components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './Components/contacts/contact-details/contact-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ConceptsComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
