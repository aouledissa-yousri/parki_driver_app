import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HashingService } from 'src/app/services/hashingService/hashing.service';
import { Driver } from '../../../../models/Driver';
import { DriverApiService } from '../../../../services/driverApiService/driver-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  form = new FormGroup({})

  constructor(private builder: FormBuilder, private driverApi: DriverApiService, private hash: HashingService) { }

  ngOnInit() {
    this.initForm()
  }

  private initForm(){
    this.form = this.builder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      phoneNumber: [0, [Validators.required, Validators.min(1)]],
      password : ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  signUp(){
    let driver = new Driver(
      this.form.value["name"],
      this.form.value["lastname"],
      this.form.value["username"],
      this.form.value["email"],
      this.form.value["phoneNumber"],
      this.hash.saltPassword(this.form.value["password"]),
      [],
      [],
      []
    )

    this.driverApi.signUp(driver).subscribe(data => {
      if(data.result){
        console.log("sign up successful")
        this.initForm()
      }
      else 
        console.log("sign up failed")

    })

  }


}
