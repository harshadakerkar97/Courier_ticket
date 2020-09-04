import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-courier';

  constructor(private router: Router) { }

  gotoPage(page) {
    this.router.navigate([page]);
  }

}
