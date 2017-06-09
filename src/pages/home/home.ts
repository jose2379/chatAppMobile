import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MessageService} from "./servicios/message.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  arrMessages: Array<any>;
  newMessage: string;

  constructor(public navCtrl: NavController, private mS : MessageService) {

    mS.messages.subscribe(messages => {
      console.log('mensajes', messages);
      this.arrMessages = messages;
    })
  }

  sendMessage(){
    this.mS.sendMessages(this.newMessage);
    console.log('mandando', this.newMessage);
  }

}
