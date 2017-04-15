import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import the Components
import {HomeComponent} from './home/home.component';
import {RegisterPageComponent} from './register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'register',
    component : RegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
