import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import the Components
import {HomeComponent} from './home/home.component';
import {RegisterPageComponent} from './register-page/register-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'register',
    component : RegisterPageComponent
  },
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path : 'profile',
    component : ProfilePageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
