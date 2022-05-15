import { Component, OnInit } from '@angular/core';
import { Driver } from 'src/app/Entities/driver';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
// ca c un test mais il faut avoir la liste des transacrion ou les utilisations faites
//donc il faut creer entity de type transaction et les affichers ici
  drivers:Driver []=[];
  

  constructor(private service:ApiService) { }

  
  
  
  ngOnInit() {
    this.service.getAllDrivers()
    .subscribe( data => {console.log(data);
     this.drivers = data})
    
  
  }
}
