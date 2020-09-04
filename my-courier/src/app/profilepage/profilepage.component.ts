import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  public data1: any = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.load2();
  }
  async load2() {
    let mail = sessionStorage.getItem('sid')
    const url = `http://localhost:1400/getUser?email=${mail}`;
    let result: any = await this.http.get(url).toPromise();
    this.data1 = result;
    console.log(this.data1);

  }



}
