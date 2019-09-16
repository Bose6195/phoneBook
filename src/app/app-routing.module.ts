import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './components/concepts/concepts.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AddContactComponent } from './Components/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './Components/contacts/contact-details/contact-details.component';


const routes: Routes = [
  { path: '', component: ConceptsComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'about', component: AboutComponent },
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/new', component: AddContactComponent},
  {path: 'contacts/:id', component: ContactDetailsComponent},
  {path: 'signin', component: ConceptsComponent},
  {path: 'signup', component: ConceptsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
