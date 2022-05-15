import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  
  image = {
    src: "",
    height: 0, 
    width: 0
  }

  constructor(private router:Router) { 
    setTimeout(() =>{
      this.router.navigate(['/landing']);
    },3000)
  }

  ngOnInit() {
    this.initImage()
  }

  private initImage(){
    this.image.src = "assets/parki.png",
    this.image.height = 300
    this.image.width = 250
  }

}
