import { Controller, Get, Post } from '@nestjs/common';

import { TodoService } from './services/todo/todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos() {
    return this.todoService.getAllTodos();
  }

  @Post()
  createTodo() {
    return this.todoService.createTodo();
  }
}
