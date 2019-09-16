import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {


   // Step1 : Create Form group
    contactForm: FormGroup;

    isSaved: boolean;

    constructor(private contactService: ContactService, private router: Router) { }

    ngOnInit() {
      // Step2 : Create an object for form group
      this.contactForm = new FormGroup({
        // Step3 : we will create new form controls
        name: new FormControl('', Validators.required), // Step6: Add Validators
        phone: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      });
    }

    onAddContactSubmit() {
      console.log('Submitted');
      // 1.Get the data from the contact form
      console.log(this.contactForm.value);
      // 2.Send the data to service
      // 2.1.Connect to the ContactService
      // 2.2.Send the data to a method in the service.
      this.contactService.createContact(this.contactForm.value)
      .subscribe((resp: any) => { // 3.Get the resp from ContactService
        console.log(resp);
        // 4. Patch up with the response
        if (resp && resp.id) {
          this.isSaved = true;
        }
      });
    }

  goBackClick() {
      this.router.navigate(['/contacts']);
    }

}
