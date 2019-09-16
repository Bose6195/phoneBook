import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: []
})
export class ContactDetailsComponent implements OnInit {
    contactData: any;
    contactId: string;
    duplicateContactData: any;
    isSaved: boolean;

    constructor(private contactService: ContactService, private router: ActivatedRoute) { }

    ngOnInit() {
      this.contactId = this.router.snapshot.paramMap.get('id');
      this.contactService.getContactById(this.contactId).subscribe((resp: any) => {
        console.log(resp);
        this.contactData = resp;
      });
    }

    openEditModel() {
        // open model through TS/JS
        // $('#editContactModal').modal('show');
        // duplicate the contact data
        this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
    }

}
