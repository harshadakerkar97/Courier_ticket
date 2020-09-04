import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  gotoPage(page) {
    this.router.navigate([page]);
  }
  logout1(no) {
    sessionStorage.removeItem('sid');
    this.router.navigate([no]);
  }

}
