import { Todo, TodoSchema } from './todo/schemas/todos.schema';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/services/todo/todo.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://ChromeBookmarkCategorizer:ia5TVpJmv7WwegZx@cluster0.ekeiy.mongodb.net/TodoListDB?retryWrites=true&w=majority',
      }),
    }),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
