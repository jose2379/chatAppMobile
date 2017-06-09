import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPageComponent {

  homeView = HomePage;
  AboutView = AboutPage;
  ContactView = ContactPage;

  constructor() {

  }
}
