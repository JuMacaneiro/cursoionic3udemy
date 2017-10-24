import { LoginProvider } from './../../providers/login/login';
import { Credencial } from './../../model/credencial';

import { RegistrarPage } from "./../registrar/registrar";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import firebase from 'firebase';


@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {

credencial: Credencial;


  constructor(
    public navCtrl: NavController,
    public LoginProvider: LoginProvider) {
      this.credencial = new Credencial();
    }

  ionViewDidLoad() {
    this.credencial = new Credencial();
    this.LoginProvider.loginSucessoEventEmitter.subscribe(
      user => console.log(user)
    )
    this.LoginProvider.loginFalhaEventEmitter.subscribe(error =>
      console.log(error)
    )
  }
  loginComFacebook(){
this.LoginProvider.loginComFacebook();
  }

  loginComCredencial(){
    this.LoginProvider.loginComCredencial(this.credencial);
  }
  loginComGoogle(){
    this.LoginProvider.loginComGoogle();
  }

  doRegister() {
    this.navCtrl.push(RegistrarPage);
  }
}
