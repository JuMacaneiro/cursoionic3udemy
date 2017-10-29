import { LovProvider } from './../../providers/lov/lov';
import { Tarefa } from './../../model/tarefas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {



  tarefa: Tarefa;

 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
  public LovProvider: LovProvider) { 
   
  }

  ionViewDidLoad() {
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
  this.tarefa = new Tarefa();

    }
 
  }

}
  