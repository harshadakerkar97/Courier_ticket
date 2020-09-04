import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Directive, ElementRef } from '@angular/core';


@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {

  public uiInvalidCredential = false;
  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router) { }
  dbForm = this.fb.group({
    email: ['', Validators.required],
    pass: ['', Validators.required],
    conpass: ['', Validators.required],
  })
  ngOnInit(): void {
  }

  async UpdateHere() {
    const url = "http://localhost:1400/checkemail";
    const data = this.dbForm.value;
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      const url1 = "http://localhost:1400/changepass";
      const data = this.dbForm.value;
      const result1: any = await this.http.post(url1, data).toPromise();
      if (result1.opr) {
        alert("password Updated successfully!!!");
        this.router.navigate(['login']);
      }
      else {
        alert("Please try again !!!");
      }
    } else {
      this.uiInvalidCredential = true;
    }
    this.dbForm.reset();
  }
}


