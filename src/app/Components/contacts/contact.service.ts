import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  // Client to connect to REST API
  constructor(private http: HttpClient) { }

  // 1.Get the data from component
  createContact(contactData: any) {
    console.log(contactData);
    // 2. Send it to Rest API
    return this.http.post(this.API_URL, contactData)
    .pipe(map(resp => { // 3. Get the Resp from Rest API
      console.log(resp);
      return resp; // 4. Send it back to Component
    }));
  }

  getContacts() {
    return this.http.get(this.API_URL)
    .pipe(map((resp: any) => {
      console.log(resp);
      return resp;
    }));
  }

  getContactById(id: any) {
    return this.http.get(this.API_URL + '/' + id)
    .pipe(map((resp: any) => {
      console.log(resp);
      return resp;
    }));
  }

}
