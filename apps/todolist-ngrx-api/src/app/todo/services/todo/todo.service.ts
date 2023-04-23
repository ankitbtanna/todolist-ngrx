import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../../schemas/todos.schema';

import * as crypto from 'crypto';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>
  ) {}

  async getAllTodos() {
    return this.todoModel.find().exec();
  }

  async createTodo() {
    const createdTodo = await this.todoModel.create({
      id: crypto.randomUUID(),
      task: 'Test',
      status: 'NEW',
      date: new Date().toISOString(),
    });

    return createdTodo;
  }

  async getTodoById(id: string) {
    const todoById = await this.todoModel
      .findOne({
        id: id,
      })
      .exec();

    return todoById;
  }

  async deleteTodoById(id: string) {
    const deletedTodoById = await this.todoModel
      .findOneAndRemove({
        id: id,
      })
      .exec();

    return deletedTodoById;
  }
  
  async updateTodoById(id: string, todo) {
    await this.todoModel.findOneAndUpdate({
      id: id
    }, todo).exec();
    
    const updatedTodoById = await this.todoModel.findOne({
      id: id
    }).exec();

    console.log(updatedTodoById);    
    return updatedTodoById;
  }
}
