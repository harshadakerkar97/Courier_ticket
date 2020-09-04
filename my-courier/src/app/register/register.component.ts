import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void {
  }
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }
  dform = this.fb.group({
    uname: ['', Validators.required],
    email: ['', Validators.required],
    pass: ['', Validators.required],
    conpass: ['', Validators.required],
    cont: ['', Validators.required],
    dob: ['', Validators.required],
    sel: "user",
  });


  async resgisterHere() {
    const data = this.dform.value;
    if (data.email.indexOf('@') === 0 || (data.email.indexOf('.') !== data.email.length - 3 && data.email.indexOf('.') !== data.email.length - 4)) {
      alert("Please Enter Valid Email Id");
    }

    else if (data.pass.length < 8 || data.pass.length > 10) {
      alert("please enter Password lenght min is 8 and max is 15")

    }
    else if (data.pass !== data.conpass) {
      alert("Password And Confirm Password Are Not Match");
    }
    else if (data.cont.length !== 10 || isNaN(data.cont)) {
      alert("Please Enter 10 Digit Mobile Number");
    } else {
      const url1 = 'http://localhost:1400/checkemail';
      const result: any = await this.http.post(url1, data).toPromise();
      console.log(result);
      if (!result.opr) {
        const url = "http://localhost:1400/addInfo";
        await this.http.post(url, data).toPromise();
        this.dform.reset();
        this.router.navigate(['login']);
      }
      else {
        alert("This email is already registered!!!");
      }
    }
  }

}
