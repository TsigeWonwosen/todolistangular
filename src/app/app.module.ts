import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './componets/todo/todo.component';
import { TodoItemComponent } from './componets/todo-item/todo-item.component';
import { HeaderComponent } from './componets/layour/header/header.component';
import { AddTodoComponent } from './componets/add-todo/add-todo.component';
import { AboutComponent } from './componets/pages/about/about.component';

@NgModule({
	declarations: [ AppComponent, TodoComponent, TodoItemComponent, HeaderComponent, AddTodoComponent, AboutComponent ],
	imports: [ BrowserModule, HttpClientModule, AppRoutingModule, FormsModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
