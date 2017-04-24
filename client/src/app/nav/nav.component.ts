import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {AuthService} from '../auth.service';

import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authInstance$;
  user$;
  initialUserData;

  constructor(private auth : AuthService, private toastrService: ToastrService, private userService : UserService, private router : Router) { 
    this.user$ = userService.user$;
    
  }

  /*isAuthenticated(){
    return this.authInstance;
  }*/

  logout(){
    this.auth.logout();
    this.userService.updateUser(null);
    this.toastrService.success('You are now logged out', 'Info');
    this.router.navigate(['/']);
    
  }

  ngOnInit() {
    console.log(this.authInstance$);

    //check if there is an instance of the firebase user object and update the user
    this.authInstance$ = this.auth.getAuth();
    //console.log(this.authInstance$);

    this.authInstance$.subscribe(authObject => {

      if(authObject){

        this.initialUserData = this.auth.getUserDetails(authObject);
        this.userService.updateUser(this.initialUserData);
        this.router.navigate(['/profile']);

        this.toastrService.info('You are logged In', 'Status');
      }
      
    })
  }

}
