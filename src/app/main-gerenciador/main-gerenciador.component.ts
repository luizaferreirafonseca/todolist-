import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TarefaService } from '../servicos/tarefa.service';
import { ITarefa } from '../Models/Tarefa';
import { ITarefaDTO } from '../Models/TarefaDTO';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar/navbar.component';



@Component({
  selector: 'app-main-gerenciador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FooterComponent, NavbarComponent],
  templateUrl: './main-gerenciador.component.html',
  styleUrl: './main-gerenciador.component.css', 
  
})
export class MainGerenciadorComponent {


updateForm: boolean = false;
showCreateForm: boolean = true; 

// alterarTasks():void {
//   this.showCreateForm = false;
//   this.updateForm = true; 
// }

cancelar():void{
  this.updateForm  = false; 
  this.showCreateForm = true; 
}



tarefas:ITarefa[] = []; 
id:number = 0; 



//Uma tarefa só 
tarefa:ITarefa = {
  id: 0, 
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
  dataInicio: new FormControl(new Date()),
  dataTermino: new FormControl(new Date()),
  descricao: new FormControl(''),

})




constructor(private service: TarefaService){

}



ngOnInit(){
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




postNewTask():void{
  this.service.postTarefas(this.formulario.value as ITarefaDTO)
  .subscribe(tarefa => {
    this.tarefas = tarefa 

    this.formulario.reset(); 
  })
}




// updateTask(id: string): void {
//   this.service.editarTarefa(id, this.formulario2.value as ITarefaDTO)
//     .subscribe(tarefaEditada => {
  
//     }
// }}


getTarefa(tarefa: ITarefa):void{

  this.showCreateForm = false; 
  this.updateForm = true; 

    this.tarefa = tarefa
    this.formulario2.setValue({
      nomeTarefa: tarefa.nomeTarefa,
      dataInicio: tarefa.dataInicio,
      dataTermino: tarefa.dataTermino, 
      descricao: tarefa.descricao 

    });

}

removeTarefa(id:number):void{
  this.service.deleteTask(id)
  .subscribe(tarefas => {
    this.tarefas = tarefas;
  })
}







// updateTarefa(id:string, tarefaPraEditar: ITarefaDTO):void{
//   this.service.editarTarefa(id, tarefaPraEditar)
//   .subscribe((tarefaEditada: ITarefa) => {
//     this.tarefa = tarefaEditada; 
//   });
// }






// updateTarefa(id:string, tarefaParaEditar: ITarefaDTO): void{
//   this.service.editarTarefa(id, tarefaParaEditar)
//   .subscribe((tarefaEditada: ITarefa) => {
//     console.log('Tarefa editada', tarefaEditada)
//   });
// }

// updateTarefa(id:number, obj:ITarefaDTO):void{
//   this.service.editarTarefa(id, obj)
//   .subscribe(tarefa => {
//     this.tarefa = tarefa;
    
    
//   })
// }

// updateTarefa(id: number, obj: ITarefa): void {
//   this.service.editarTarefa(id, obj)
//     .subscribe(tarefaEditada => {
//       const indexTarefa = this.tarefas.findIndex(tarefa => tarefa.id === id);

//       if (indexTarefa !== -1) {
//         // Atualiza a tarefa na lista
//         this.tarefas[indexTarefa] = tarefaEditada;
//       }
//     });
// }


// updateTarefa(id:string, tarefaParaEditar: ITarefaDTO): void{
//   this.service.editarTarefa(id, tarefaParaEditar)
//   .subscribe((tarefaEditada: ITarefa) => {
//     console.log('Tarefa editada', tarefaEditada)
//   });
// }


 }


//updateTarefa():void{
 //   this.service.editarTarefa(this.tarefa.id, this.formulario.value as ITarefaDTO)
//    .subscribe