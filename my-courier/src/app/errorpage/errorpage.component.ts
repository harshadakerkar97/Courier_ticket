import { Component, OnInit } from '@angular/core';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  // spaceshuttle = new this.spaceshuttle;

  faSpaceShuttle = faSpaceShuttle;
  constructor() { }

  ngOnInit(): void {
  }

}
