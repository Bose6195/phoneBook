import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css']
})
export class ConceptsComponent implements OnInit, AfterViewInit {
  // String Interpolation
          appName = 'Phone Book';
          appAge = 25;
          appIsLoggedIn = true;
          // arrays
          // way #1
          skillsList: string[] = ['html', 'css', 'js'];
          // way #2
          skillsList2: Array<string> = ['nodeJs', 'reactJs', 'VueJs'];
  // Property Binding
          devName = 'Property Binding Value';
  // Two way Binding
          courseName = '';
  // Custom Property Binding
          myAgeIs = 24;
  // Custom Event Binding
          profileData;
  // For View Child
  @ViewChild(CebComponent, {static: false}) cebData: CebComponent; //  correct syntax @angular-8
  @ViewChild('testViewChild', {static: false}) cebData1: CebComponent;

  //Directives
  isAuth = true;
  courseList: string[] = [
    'Angular', 'Dotnet', 'java'
  ];

  constructor() { }

  ngOnInit() {
  }
  // this will wait till child component's data are setup
  ngAfterViewInit() {
    console.log('View Init : ', this.cebData);
    console.log('View Init 1 : ', this.cebData1);
  }
  // For Property Binding
  isAuthenticated(): boolean {
    return true;
  }
  // For Event Binding
  onBtnClick() {
    alert('Event Triggered');
  }
  onBtnClickMouseEvent(event: Event): void {
    console.log(event);
  }
  // For Custom Property Binding
  myAgeMethod(): number {
    return 23;
  }
  // For Custom Event Binding
  // Step 4 : Receive the data with event handler
  profileLoadedHandler(evt) {
    console.log('Event Emitted Json : ', evt);
    console.log('Event Triggered for Custom Event Binding using (onProfileLoaded)="profileLoadedHandler()"');
    // Step 5 : Save the data into local variable if needed
    this.profileData = evt;
  }
}
