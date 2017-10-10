import { Usuario } from './../../model/usuario';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }

  registrarSe(usuario:Usuario){

  }

}
