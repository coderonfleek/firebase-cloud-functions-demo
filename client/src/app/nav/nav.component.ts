import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  authInstance$;
  user;

  constructor(private auth : AuthService, private toastrService: ToastrService) { 

    this.authInstance$ = auth.getAuth();
    //console.log(this.authInstance$);

    this.authInstance$.subscribe(authObject => {

      if(authObject){

        this.user = auth.getUserDetails(authObject);
        console.log(this.user);

        this.toastrService.info('You are logged In', 'Status');
      }
      
    })
  }

  /*isAuthenticated(){
    return this.authInstance;
  }*/

  logout(){
    this.auth.logout();
    this.toastrService.success('You are now logged out', 'Info');
    
  }

  ngOnInit() {
    console.log(this.authInstance$);
  }

}
