import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../Models/Todos';
@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.css' ]
})
export class TodoComponent implements OnInit {
	todos: Todo[];
	constructor(private todoService: TodoService) {}

	ngOnInit() {
		this.todoService.getTodos().subscribe((todos) => {
			this.todos = todos;
		});
	}
	deleteTodo(todo: Todo) {
		this.todos = this.todos.filter((t) => t.id !== todo.id);
		this.todoService.deleteTodo(todo).subscribe();
	}

	addTodo(todo: Todo) {
		this.todoService.addTodo(todo).subscribe((todo) => this.todos.push(todo));
		//this.todos = this.todos.push(todo);
	}
}
