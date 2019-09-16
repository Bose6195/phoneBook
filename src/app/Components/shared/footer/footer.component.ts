import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
    <hr>
    <div style="text-align:center;font-size:12px;font-weight:bold;">
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="/">Go to Top</a>
        </li>
      </app-nav>
      <p class="greenText">Copyright &copy; 2019</p>
    </div>
  </footer>
  `,
  styles: [
    `
    .greenText {
      color:green;
    }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
