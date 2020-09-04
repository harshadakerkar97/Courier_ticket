import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {

  constructor(private router: Router) { }
  path = [
    { title: 'Home', link: 'home1' },
    { title: 'Track', link: 'home1/track' },
    { title: 'Contact me', link: 'home1/contact' },
    { title: 'Profile', link: 'home1/profile' },
  ];

  ngOnInit(): void {
  }

}
