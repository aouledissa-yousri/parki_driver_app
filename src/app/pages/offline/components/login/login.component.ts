import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverApiService } from '../../../../services/driverApiService/driver-api.service';
import { Credentials } from '../../../../models/Credentials';
import { HashingService } from '../../../../services/hashingService/hashing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form = new FormGroup({})

  constructor(private builder: FormBuilder, private driverAPi: DriverApiService, private hash: HashingService) { }

  ngOnInit() {
    this.initForm()
  }

  private initForm(){
    this.form = this.builder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  login(){
    let credentials = new Credentials(
      this.form.value["user"],
      this.form.value["user"],
      this.hash.saltPassword(this.form.value["password"])
    )

    this.driverAPi.login(credentials).subscribe(data => {
      console.log(data)
      this.initForm()
    })

  }

}
