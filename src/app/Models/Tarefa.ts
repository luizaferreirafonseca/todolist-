export interface ITarefa {
    id: string;
    nomeTarefa: string;
    dataInicio: Date;
    dataTermino: Date;
    descricao: string;
    estaCompleta: boolean;
    status: string;
  }