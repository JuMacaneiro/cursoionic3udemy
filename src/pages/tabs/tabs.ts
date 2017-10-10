import { RegistrarPage } from '../registrar/registrar';
import { LoginPage } from './../login/login';
import { FeedPage } from './../feed/feed';
import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = IntroPage;
  tab2Root = FeedPage;
  tab3Root = LoginPage;
  tab4Root = RegistrarPage;

  constructor() {

  }
}
