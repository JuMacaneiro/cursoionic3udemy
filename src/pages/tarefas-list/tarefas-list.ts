import { TarefasAddPage } from './../tarefas-add/tarefas-add';
import { TarefaProvider } from './../../providers/tarefa/tarefa';
import { Tarefa } from './../../model/tarefas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
               public tarefaProvider: TarefaProvider) {}

  ionViewDidLoad() {
    this.tarefas = this.tarefaProvider.getAll();
  }
adicionarTarefa() {
  this.navCtrl.push(TarefasAddPage,{'tarefa' : new Tarefa()});
}
}
