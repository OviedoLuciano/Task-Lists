import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {TASKS} from '../components/mock-tasks';
import {Task} from '../components/Task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService { private apiUrl= 'http://localhost:3000/tasks';
  filter: any;

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {

    return this.http.get<Task[]>(this.apiUrl)
  }
  
  
  deleteTask(task:Task): Observable<Task>{
const url = `${this.apiUrl}/${task.id}`
return this.http.delete<Task>(url)
  }
}
