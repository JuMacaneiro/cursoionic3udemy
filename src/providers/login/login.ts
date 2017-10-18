import { JQueryStyleEventEmitter } from "rxjs/observable/FromEventObservable";
import { Credencial } from "./../../model/credencial";
import { Usuario } from "./../../model/usuario";
import { EventEmitter, Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import firebase from "firebase";

@Injectable()
export class LoginProvider {
  currentUser:any;
  autenticado:boolean;

  loginSucessoEventEmitter: EventEmitter<any>;
  loginFalhaEventEmitter: EventEmitter<any>;
  loginoutEventEmitter: EventEmitter<any>;

  constructor(public http: Http, public NgZone: NgZone) {
    this.loginSucessoEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.loginoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario => {
      this.callbackStageChange(usuario);
    })
  }
  private callbackStageChange(usuario) {
    this.NgZone.run(() => {
      if (usuario == null) {
        this.currentUser = null;
        this.autenticado = false;
      } else {
        this.currentUser = usuario;
        this.autenticado = true;
      }
    });
  }
loginComCredencial(credencial: Credencial){
  firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
   .then(resultado => this.callbackSucessoLogin (resultado) )
   .catch(error => this.callbackFalhaLogin(error));
}
loginComGoogle(){
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(resultado => this.callbackSucessoLogin (resultado) )
  .catch(error => this.callbackFalhaLogin(error));
}
  registrarUsuario(credencial: Credencial) {
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
sair(){
  firebase.auth().signOut()
    .then(result => console.log(result))
      .catch(error => console.log(error));
}


  private callbackSucessoLogin(response) {
    this.loginSucessoEventEmitter.emit(response.user);
  }
  private callbackFalhaLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message : error.message, email : error.email, credencial: error.credencial});
  }
}
