import { Component, OnInit} from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {AuthService} from '../auth.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  courses : FirebaseListObservable<any[]>;

  constructor(af : AngularFire, private auth : AuthService, private toastrService: ToastrService) { 
    //this.courses = af.database.list('/courses');

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
        this.toastrService.success('User Successfully Created', 'Success');
      },
      (err) => {
        console.log(err);
        this.toastrService.error(err.message, 'Error');
      }
    );
  }

}
