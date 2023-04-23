import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from '../../schemas/todos.schema';

@Injectable()
export class TodoService {
    constructor(@InjectModel(Todo.name) private readonly todoModel: Model<Todo>) {}
    
    async getAllTodos() {
        return this.todoModel.find().exec();
    }
}
