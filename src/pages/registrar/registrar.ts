import { LoginProvider } from '../../providers/login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  constructor(public navCtrl: NavController,
  public LoginProvider: LoginProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
