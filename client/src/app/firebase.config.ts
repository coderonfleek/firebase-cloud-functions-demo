import {AuthProviders, AuthMethods } from 'angularfire2';

//You get the details below when you click 'Add Firebase to your web app' on your firebase project dashboard
export const firebaseConfig = {
  apiKey: "AIzaSyBuhW3LABukEiTaorCBTm0oAPAOejndNMo",
  authDomain: "fir-functionsdemo-c5a54.firebaseapp.com",
  databaseURL: "https://fir-functionsdemo-c5a54.firebaseio.com",
  projectId: "fir-functionsdemo-c5a54",
  storageBucket: "",
  messagingSenderId: "874527873951"
};

//Configure Default Login type as Google
export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};