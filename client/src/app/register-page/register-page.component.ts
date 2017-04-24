import { Component, OnInit} from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {AuthService} from '../auth.service';

import { ToastrService } from 'ngx-toastr';

import {UserService} from '../user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  courses : FirebaseListObservable<any[]>;
  user$;

  constructor(af : AngularFire, private auth : AuthService, private toastrService: ToastrService, private userService : UserService) { 
    //this.courses = af.database.list('/courses');
    this.user$ = this.userService.user$;

    console.log(this.courses);
  }

  ngOnInit() {
  }

  registerEmail(register_data){
    console.log(register_data);
    this.auth.registerWithEmail(register_data)
    .then(
      (data) => {
        console.log(data);
        
        var userdetails = this.userService.getUserDetails(data);

        this.userService.updateUser(userdetails);

        this.toastrService.success('User Successfully Created', 'Success');
      },
      (err) => {
        console.log(err);
        this.toastrService.error(err.message, 'Error');
      }
    );
  }

}
