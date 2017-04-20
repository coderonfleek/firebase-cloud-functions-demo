import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  formData : any;
  @Input() type : string;//Type of operation whether login or register
  @Output() submit : EventEmitter<any>;
  buttonText : string;


  constructor() { 
    this.formData = {};

    this.submit = new EventEmitter<any>();//Its very important that you 'new' up your event emitters
    
  }

  submitForm(formData){
    console.log(formData);
    this.submit.emit(formData);
  }

  

  ngOnInit() {

    console.log(this.type);
    this.buttonText = (this.type === 'login')? 'Login' : 'Register';
  }

}
