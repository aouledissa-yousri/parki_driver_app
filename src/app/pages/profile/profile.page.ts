import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  UpdateForm : FormGroup;
  constructor(private formbuilder:FormBuilder , private service:ApiService,private nav: NavController) {}

  validationMessages = {
    nomCompletU: [{type:"required", message:"Entrer votre nom complet"}],
    Telephone: [{type:"required", message:"Entrer votre numero de telephone."}],
      Email: [
        {type: 'required',message:"Entrer votre adresse email"},
        {type:"pattern", meesage:"Email non valid !!"}
      ],
      Adresse: [
        {type: 'required',message:"Entrer votre adresse "},
        {type:"pattern", meesage:"Entrer une adresse valide. Essayer encore.."}
      ], 
      Region: [
        {type: 'required',message:"Entrer votre region "},
        {type:"pattern", meesage:"Entrer une region valide. Essayer encore.."}
      ],
      Postale: [{type:"required", message:"Entrer le code postale"}],
      password: [
        {type: "required", message: "Ce champ est obligatoire"},
        {type:"minlength", message: "Le mot de passe doit depasser 6 caractéres"}
      ]
   }
   onModifier(){
    // this.service.updateUser(id, this.livreForm.value)
    // .subscribe(
    //   livre => {
    //     let position = this.lesLivres.findIndex(l =>l.id == livre.id);
    //     this.lesLivres[position]= livre;
    //   }
    // )
   }
   onQuitter(){
    this.nav.navigateForward(['login']);
   }


  ngOnInit() {
    this.UpdateForm = this.formbuilder.group({
      nomCompletU: new FormControl('', Validators.compose([
         Validators.required
      ])), 
      Telephone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Postale: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      Adresse: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9-]')
      ])),
      Region: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('^[a-zA-Z0-9-]')
      ])),
     
  
    })
    
  }

}
