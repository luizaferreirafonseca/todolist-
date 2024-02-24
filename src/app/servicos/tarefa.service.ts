import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITarefa } from '../Models/Tarefa';
import { Observable } from 'rxjs';
import { ITarefaDTO } from '../Models/TarefaDTO';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private url:string = 'https://localhost:7066'; 


  constructor(private http: HttpClient) { }


  getTarefas():Observable<ITarefa[]>{
    return this.http.get<ITarefa[]>(`${this.url}/api/TarefasUsuario`); 
  }


  postTarefas(obj:ITarefaDTO):Observable<ITarefa[]>{
    return this.http.post<ITarefa[]>(`${this.url}/api/TarefasUsuario`, obj)
  }


  editarTarefa(id:string, obj:ITarefaDTO):Observable<ITarefa>{
   return this.http.put<ITarefa>(`${this.url}/api/TarefasUsuario/EditarTarefa/${id}`, obj)
 }
 


  deleteTask(id:number):Observable<ITarefa[]>{
    return this.http.delete<ITarefa[]>(`${this.url}/api/TarefasUsuario/DeletarTarefa/${id}`)
  }
















}
