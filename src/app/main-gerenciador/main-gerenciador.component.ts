import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TarefaService } from '../servicos/tarefa.service';
import { ITarefa } from '../Models/Tarefa';
import { ITarefaDTO } from '../Models/TarefaDTO';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-main-gerenciador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './main-gerenciador.component.html',
  styleUrl: './main-gerenciador.component.css',

})
export class MainGerenciadorComponent {

  navbarButton = 'Logout';
  route = "/"



  updateForm: boolean = false;
  showCreateForm: boolean = true;

  // alterarTasks():void {
  //   this.showCreateForm = false;
  //   this.updateForm = true; 
  // }

  cancelar(): void {
    this.updateForm = false;
    this.showCreateForm = true;
  }



  tarefas: ITarefa[] = [];
  id: number = 0;



  //Uma tarefa só 
  tarefa: ITarefa = {
    id: "",
    nomeTarefa: "",
    dataInicio: new Date(),
    dataTermino: new Date(),
    descricao: "",
    estaCompleta: false,
    status: ""

  }







  //Formulário Criar Tarefa
  formulario = new FormGroup({
    nomeTarefa: new FormControl(''),
    dataInicio: new FormControl(''),
    dataTermino: new FormControl(''),
    descricao: new FormControl(''),

  })

  //Formulário Editar Tarefa (assim que clicamos alterar aparece ele setado com os valores)
  formulario2 = new FormGroup({
    nomeTarefa: new FormControl(''),
    dataInicio: new FormControl(new Date().toISOString().substring(0, 10)),
    dataTermino: new FormControl(new Date().toISOString().substring(0, 10)),
    descricao: new FormControl(''),

  })




  constructor(private service: TarefaService) {

  }



  ngOnInit() {
    this.service.getTarefas()
      .subscribe(dadosTarefas => this.tarefas = dadosTarefas);



  }

  formatarData(value: Date): string {
    // Convertendo a string para um objeto Date
    const valueToDate: Date = new Date(value);

    // Criando um objeto Intl.DateTimeFormat para formatar a data
    const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('pt-BR', {
      timeZone: 'UTC',
      dateStyle: 'short'
    });

    // Formatando a data e retornando a string formatada

    return formatter.format(valueToDate);
  }


  formatarDataParaEditarTask(data: Date): string {
    return new Date(data).toISOString().substring(0, 10);
  }


  postNewTask(): void {
    this.service.postTarefas(this.formulario.value as ITarefaDTO)
      .subscribe(tarefa => {
        this.tarefas = tarefa

        this.formulario.reset();
      })
  }




  updateTask(): void {
    this.service.editarTarefa(this.tarefa.id, this.formulario2.value as ITarefaDTO)
      .subscribe(tarefaEditada => {
        const index = this.tarefas.findIndex(tarefa => tarefa.id === tarefaEditada.id)
        this.tarefas[index] = tarefaEditada

        this.formulario2.reset();
      })
  }



  getTarefa(tarefa: ITarefa): void {

    this.showCreateForm = false;
    this.updateForm = true;

    this.tarefa = tarefa
    this.formulario2.setValue({
      nomeTarefa: tarefa.nomeTarefa,
      dataInicio: this.formatarDataParaEditarTask(tarefa.dataInicio),
      dataTermino: this.formatarDataParaEditarTask(tarefa.dataTermino),
      descricao: tarefa.descricao

    });

  }

  removeTarefa(id: string): void {
    this.service.deleteTask(id)
      .subscribe(tarefas => {
        this.tarefas = tarefas;
        this.formulario2.reset(); 
      })
  }







  // updateTarefa(id:string, tarefaPraEditar: ITarefaDTO):void{
  //   this.service.editarTarefa(id, tarefaPraEditar)
  //   .subscribe((tarefaEditada: ITarefa) => {
  //     this.tarefa = tarefaEditada; 
  //   });
  // }






  
