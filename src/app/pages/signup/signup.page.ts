import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validationMessages = {
    name: [{type:"required", message:"Please Enter your Names"}],
    lastname: [{type:"required", message:"Please Enter your LastNames"}],
    username: [{type:"required", message:"Please Enter your Username"}],
    phone: [{type:"required", message:"Please Enter your Phone No."}],
    email: [
      {type: 'required',message:"Enter your Email Adress"},
      {type:"pattern", meesage:"Please the Email Entered is Incorrect. Try again.."}
    ],
    password: [
      {type: "required", message: "password is required here"},
      {type:"minlength", message: "Passwrd must be at least 6 character"}
    ]
 }

 

constructor(private router: Router,private nav: NavController,private crud:ApiService,private formbuilder:FormBuilder,private api:ApiService){
 }
 ValidationFormDriver : FormGroup
ngOnInit() {
this.ValidationFormDriver = this.formbuilder.group({
  name: new FormControl('', Validators.compose([
     Validators.required
  ])),

  lastname: new FormControl('', Validators.compose([
    Validators.required
 ])),

 username: new FormControl('', Validators.compose([
  Validators.required
])),

  phone: new FormControl('', Validators.compose([
    Validators.required
  ])),
  email: new FormControl('', Validators.compose([
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ])),

  password: new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(6)
  ]))

})

}

registerUser(){
  this.crud.addDriver(this.ValidationFormDriver.value)
  .subscribe(data => console.log("data"+data));
  this.nav.navigateForward(['login']);
}


}




