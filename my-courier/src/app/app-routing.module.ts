import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { Homepage1Component } from './homepage1/homepage1.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { TrackComponent } from './track/track.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { Homepage2Component } from './homepage2/homepage2.component';

const routes: Routes = [
  { path: 'reg', component: RegisterComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'forget', component: ForgetpassComponent },
  { path: '404', component: ErrorpageComponent },
  {
    path: 'home1', component: Homepage1Component, children: [
      { path: 'homepage', component: Homepage2Component },
      { path: 'profile', component: ProfilepageComponent },
      { path: 'track', component: TrackComponent },
      { path: 'contact', component: ContactpageComponent },
    ],
  },


  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
