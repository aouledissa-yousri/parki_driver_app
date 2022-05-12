import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/Eentities/agent';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {
// ca c un test mais il faut avoir la liste des transacrion ou les utilisations faites
//donc il faut creer entity de type transaction et les affichers ici
  agents:Agent []=[];
  

  constructor(private service:ApiService) { }

  
  
  
  ngOnInit() {
    this.service.getAllAgents()
    .subscribe( data => {console.log(data);
     this.agents = data})
    
  
  }
}
