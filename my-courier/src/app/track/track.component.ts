import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  public data1: any = [];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }
  // list1 = [{ id: "1" },
  // { id: "2" }];
  // list = [
  //   {
  //     id: "1",
  //     name: "harshada",
  //     email: "hk@gmail.com",
  //     phone: "7208510008",
  //     address: "gvhg"
  //   },
  //   {
  //     id: "2",
  //     name: "harshada",
  //     email: "hk@gmail.com",
  //     phone: "7208510008",
  //     address: "gvhg"
  //   },
  // ];

  // 
  async getData() {
    let mail = sessionStorage.getItem('sid')
    const url = `http://localhost:1400/getDetail?email=${mail}`;
    let result: any = await this.http.get(url).toPromise();
    this.data1 = result;
    console.log(this.data1);

  }



}

