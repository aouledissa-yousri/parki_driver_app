import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Driver } from 'src/app/models/Driver';
import { DriverApiService } from 'src/app/services/driverApiService/driver-api.service';
import { HashingService } from 'src/app/services/hashingService/hashing.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.scss'],
})
export class UpdateAccountComponent implements OnInit {

  form = new FormGroup({})
  driver = new Driver("","","","","","",[],[],[])

  constructor(private builder: FormBuilder, private driverApi: DriverApiService, private hash: HashingService) { }

  ngOnInit() {
    this.getDriverData()
    this.initForm()
  }

  private initForm(){
    this.form = this.builder.group({
      name: [this.driver.name, Validators.required],
      lastname: [this.driver.lastname, Validators.required],
      username: [this.driver.username, Validators.required],
      email: [this.driver.email, Validators.required],
      phoneNumber: [this.driver.phoneNumber, [Validators.required, Validators.min(1)]],
      password : [this.driver.password, [Validators.required, Validators.minLength(8)]]
    })
  }

  updateAccount(){
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


    this.driverApi.updateAccount(driver).subscribe(data => {
      console.log(data)
    })
  }

  private getDriverData() {
    this.driverApi.getUserData().subscribe(data => {
      this.driver = data
    })
  }

}
