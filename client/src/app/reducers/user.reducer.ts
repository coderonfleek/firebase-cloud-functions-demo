import {Action, ActionReducer} from '@ngrx/store';
import {StoreActions} from '../app-store';

export const userReducer = function(state = null, action : Action){

    switch (action.type) {
        case StoreActions.UPDATE_USER:
            return action.payload; //Return the new user instance
            
    
        default:
        return state;
            
    }

}