import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Agent } from 'src/app/Eentities/agent';
import { Credentials } from 'src/app/Entities/credentials';
import { ApiService } from 'src/app/services/api.service';
import { HashService } from 'src/app/services/hash.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private builder: FormBuilder,private crud:ApiService,private nav: NavController,private hash:HashService,private router: Router) { }
  loginForm = new FormGroup({})
  loginerror = false;


  ngOnInit() {
    this.loginForm = this.builder.group({
      user: ["", Validators.required],
      password: ["", Validators.required],
    })

    this.crud.getAllAgents()
    .subscribe( data => this.LesDrivers = data);
  }
  LesDrivers:Agent []=[];
  login(){
    for (let index = 0; index < this.LesDrivers.length+1; index++) {
      // console.log("user"+this.LesUsers[index].email);
      // console.log("entrer"+this.email);
      
      if (this.LesDrivers[index].username === this.loginForm.value['user'] && this.LesDrivers[index].password === this.loginForm.value['password'] ) {
        // this.crud.setIdUser(this.LesDrivers[index].id);
        this.crud.setNom(this.LesDrivers[index].username);
        console.log("OK");
        
        this.nav.navigateForward(['tabs/tabs/home']);
      }
      else{
        this.loginerror = true
      }
      
    }



    // let credentials = new Credentials(
    //   this.loginForm.value["user"],
    //   this.loginForm.value["user"],
    //   this.hash.saltPassword(this.loginForm.value["password"])
    // )

    // this.crud.login(credentials).subscribe(data => {
    //   console.log(data)
    //   this.loginForm = this.builder.group({
    //     user: ["", Validators.required],
    //     password: ["", Validators.required],
    //   })
    // })
    
  }
  goToSignUp(){    
    this.router.navigate(["signup"])
  }

}
