import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from "./servicios/user.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  arrUsuarios: Array<Object>;

  constructor(public navCtrl: NavController, private uS : UserService) {
    uS.getUser()
      .subscribe( usuarios => {
        this.arrUsuarios = usuarios['results'];
      });
  }

  deleteUser(indice){
    this.arrUsuarios.splice(indice, 1);
  }

}
