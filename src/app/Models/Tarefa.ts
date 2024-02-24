export interface ITarefa {
    id: number;
    nomeTarefa: string;
    dataInicio: Date;
    dataTermino: Date;
    descricao: string;
    estaCompleta: boolean;
    status: string;
  }