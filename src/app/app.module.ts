import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { appComponent } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPageComponent } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UserService} from "../pages/contact/servicios/user.service";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {MessageService} from "../pages/home/servicios/message.service";
import {AngularFireDatabase} from "angularfire2/database";

@NgModule({
  declarations: [
    appComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPageComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(appComponent),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    appComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPageComponent
  ],
  providers: [
    UserService,
    MessageService,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
