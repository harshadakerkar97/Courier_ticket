import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { TrackComponent } from './track/track.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { Homepage2Component } from './homepage2/homepage2.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomepageComponent,
    LoginpageComponent,
    ForgetpassComponent,
    ErrorpageComponent,
    Homepage1Component,
    ProfilepageComponent,
    TrackComponent,
    ContactpageComponent,
    Homepage2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
