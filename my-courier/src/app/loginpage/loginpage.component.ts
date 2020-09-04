import { Component, OnInit } from '@angular/core';
// import { fabook } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Directive, ElementRef } from '@angular/core';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public uiInvalidCredential = false;

  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router) { }

  // isSelected = "user";
  dbForm = this.fb.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
  })
  ngOnInit(): void {
  }

  async loginHere() {
    const url = "http://localhost:1400/check";
    const data = this.dbForm.value;
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', data.email);
      this.router.navigate(['home1/homepage']);
    } else {
      this.uiInvalidCredential = true;
    }
    this.dbForm.reset();
  }


  // fun(e) {
  //   if (e.target.checked) {
  //     const data = this.dbForm.value;
  //     // document.querySelector('input').type = "text";
  //     data.pass.ElementRef.type = "text";

  //   }

  // }


}
