import { Controller, Get, Param, Post, Delete, Put, Req } from '@nestjs/common';

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

  @Get('/:id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Delete('/:id')
  deleteTodoById(@Param('id') id: string) {
    return this.todoService.deleteTodoById(id);
  }
  
  @Put('/:id')
  updateTodoById(@Param('id') id: string, @Req() req) {
    return this.todoService.updateTodoById(id, req.body);
  }
}
