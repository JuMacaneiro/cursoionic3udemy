import { Component, Input } from '@angular/core';
import { Tarefa } from '../../model/tarefas';


/**
 * Generated class for the TarefaListItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tarefa-list-item',
  templateUrl: 'tarefa-list-item.html'
})
export class TarefaListItemComponent {

@Input()
tarefa:Tarefa;
}
