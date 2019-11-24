import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/Services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title = "Todos"
  allTodos = [];
  constructor(private todosService:TodosService) { }

  async ngOnInit() {
   return await this.todosService.getTodos().subscribe(todo => this.allTodos = todo, error => console.error(error))
  }

}
