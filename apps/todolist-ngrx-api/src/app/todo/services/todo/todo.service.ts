import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../../schemas/todos.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>
  ) {}

  async getAllTodos() {
    return this.todoModel.find().exec();
  }

  async createTodo(todo) {
    const createdTodo = await this.todoModel.create(todo);

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
  
  async deleteAllTodos() {
    await this.todoModel.deleteMany({ todo: { $ne: null } });
    return 'OK';
  }
}
