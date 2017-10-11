import { Credencial } from './../../model/credencial';
import { Usuario } from './../../model/usuario';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from "firebase";


@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  registrarUsuario(credencial:Credencial){
 firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
//  .then(result => console.log(result))
//  .catch(error => console.log(error));

    }


}
