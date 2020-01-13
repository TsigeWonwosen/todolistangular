import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../Models/Todos';
const httpOptions = {
	headers:
		new HttpHeaders({
			'Content-Type': 'application/json'
		})
};

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
	todoLimit = '?_limit=5';
	constructor(private http: HttpClient) {}

	//Get Todos
	getTodos(): Observable<Todo[]> {
		return this.http.get<Todo[]>(`${this.todosUrl}${this.todoLimit}`);
	}
	//Delete Todo
	deleteTodo(todo: Todo): Observable<Todo> {
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.delete<Todo>(url, httpOptions);
	}
	//Togle Completed

	toggleCompleted(todo: Todo): Observable<any> {
		const url = `${this.todosUrl}/${todo.id}`;
		return this.http.put(url, todo, httpOptions);
	}
	//add Todo
	addTodo(todo: Todo): Observable<Todo> {
		return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
	}
}
