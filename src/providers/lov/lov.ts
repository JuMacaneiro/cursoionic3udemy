import { Tarefa } from './../../model/tarefas';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EstadoTarefa } from '../../model/EstadoTarefa';

@Injectable()
export class LovProvider {

getTarefaStates():Array<EstadoTarefa>{
  return[EstadoTarefa.nova,EstadoTarefa.executando, EstadoTarefa.finalizada]
}
}
