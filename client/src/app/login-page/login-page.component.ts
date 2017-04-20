import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  formOperation : string = 'login';

  constructor(private auth : AuthService, private toastrService: ToastrService, private router : Router) { 

  }

  ngOnInit() {
  }

  loginEmail(login_data){
    console.log(login_data);
    this.auth.loginWithEmail(login_data)
    .then(
      (data) => {
        console.log(data);
        this.toastrService.success('User Successfully Logged In', 'Success');

        this.router.navigate(['/profile']);
      },
      (err) => {
        console.log(err);
        this.toastrService.error(err.message, 'Could not Login');
      }
    );
  }

}
