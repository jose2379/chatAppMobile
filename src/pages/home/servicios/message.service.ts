
import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class MessageService{

  messages : FirebaseListObservable<any>;

  constructor(private dB: AngularFireDatabase ){
    this.messages = dB.list('/messages');
  }

  sendMessages(message){
    let sendingMessage: any;
    sendingMessage = {
      username: 'Jose M',
      message: message
    };
    this.messages.push(sendingMessage);
  }
}
