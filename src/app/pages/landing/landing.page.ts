import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    //go To Login
    this.router.navigate(["login"])
  }
  signUp(){
    // go To SignUp
    this.router.navigate(["signup"])

  }

}
