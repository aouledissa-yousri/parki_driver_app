import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav:NavController,private crud:ApiService) { }

  ngOnInit() {
  }
  username:string = this.crud.nomUser;
  changer:boolean ;
  // ch:string = this.service.nomUser;
  slidesOptions = {
    slidesPerView: 1.5
  }
  onCommence(){

    if (this.changer) {
      console.log(this.changer);
      this.nav.navigateForward(['expediteur']);
    }else{
      this.nav.navigateForward(['destinataire']);
    }
  }

}
