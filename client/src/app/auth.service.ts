import { Injectable } from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public af : AngularFire) {
    
  }

  getAuth(){
    //Returns an observable of the auth object
    return this.af.auth;
  }

  registerWithEmail(user_data){

    return this.af.auth.createUser(user_data);
  }

  loginWithEmail(login_data){

    return this.af.auth.login(login_data,
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  getUserDetails(authObject){
    return (authObject.google)? authObject.google : authObject;
    
  }

  loginWithGoogle(){
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }
  
}