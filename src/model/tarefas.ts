import { EstadoTarefa } from './EstadoTarefa';


export class Tarefa {
  codigo: number;
  titulo: string;
  descricao?: string;
  tarefa: EstadoTarefa;
}
