import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: []
})
export class CebComponent implements OnInit {
  // Step 1 : Create Custom Event
  // Output decorator will make this as a custom event
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onProfileLoaded: EventEmitter<any> = new EventEmitter();
  testDataforViewInit = 'testDatafor ViewInit';

  constructor() {
    // this.onProfileLoaded.emit({name: 'Krishna', age: '26'});
   }

  ngOnInit() {
    // Step 2: Emit the Event or Tiggering the Event
    // Based on EventEmitter<any> we can send key anf value pair
    // this.onProfileLoaded.emit({name: 'Krishna', age: '26'});
  }
  onLoadProfileClick() {
    this.onProfileLoaded.emit({name: 'Krishna', age: '26'});
  }

}
