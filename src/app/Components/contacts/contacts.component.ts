import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactList: any[];

    constructor(private contactService: ContactService) {
      console.log('Inside Constructor');
    }

    ngOnInit() {
      console.log('Inside ngOnInit');
      // Ideal place to send server side calls
      this.contactService.getContacts().subscribe((resp: any) => {
        console.log(resp);
        this.contactList = resp;
      });
    }

}
