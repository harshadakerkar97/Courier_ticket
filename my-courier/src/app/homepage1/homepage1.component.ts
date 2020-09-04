import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage1',
  templateUrl: './homepage1.component.html',
  styleUrls: ['./homepage1.component.css']
})
export class Homepage1Component implements OnInit {

  path = [
    { title: 'Home', link: 'home1/homepage' },
    { title: 'Track', link: 'home1/track' },
    { title: 'Contact me', link: 'home1/contact' },
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotopage(page) {
    this.router.navigate([page]);
  }
  profilep() {
    this.router.navigate(['home1/profile']);
  }
  logoutHere() {
    confirm("Do you want to logout???");
    // const ab: any = sessionStorage.key;
    sessionStorage.removeItem('sid');
    this.router.navigate(['home']);
  }

}
