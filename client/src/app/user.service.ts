import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppStore, StoreActions} from './app-store';
import {AuthService} from './auth.service';

@Injectable()
export class UserService {

  user$: Observable<any> = this.store.select('userReducer');//Note: what you select is the name of the reducer you passed in

  constructor(private store : Store<AppStore>, private auth : AuthService) { 
    //this.user$.subscribe(user => console.log(user));
  }

  getUserDetails(firebaseUserObject){
    return this.auth.getUserDetails(firebaseUserObject);
  }

  updateUser(payload){
    this.store.dispatch({type : StoreActions.UPDATE_USER, payload});
  }

}
