import { EstadoTarefa } from "./EstadoTarefa";

export class Tarefa {
  codigo:number;
  titulo?:string;
  descricao?:string;
  state:EstadoTarefa;
  

  constructor(codigo?:number, titulo?:string, descricao?:string) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.descricao = descricao;
    this.state = EstadoTarefa.nova, EstadoTarefa.executando, EstadoTarefa.finalizada;
    
  }
}
