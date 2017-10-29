import { TarefasAddPage } from './../tarefas-add/tarefas-add';
import { TarefasListPage } from './../tarefas-list/tarefas-list';
import { TarefaListItemComponent } from './../../components/tarefa-list-item/tarefa-list-item';
import { RegistrarPage } from './../registrar/registrar';

import { LoginPage } from './../login/login';
import { FeedPage } from './../feed/feed';
import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root = IntroPage;
  tab2Root = FeedPage;
  tab3Root = LoginPage;
  tabs4Root = RegistrarPage;
   tab5Root = HomePage;
   tab6Root = TarefaListItemComponent;
   tab7Root = TarefasListPage;
   tab8Root = TarefasAddPage;

  constructor() {

  }
}
