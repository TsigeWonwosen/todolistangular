import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './componets/todo/todo.component';
import { AboutComponent } from './componets/pages/about/about.component';

const routers: Routes = [
	{
		path: '',
		component: TodoComponent
	},
	{
		path: 'about',
		component: AboutComponent
	}
];
@NgModule({
	imports: [ RouterModule.forRoot(routers) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
