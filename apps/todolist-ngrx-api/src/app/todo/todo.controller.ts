import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
    
    @Get()
    getAllTodos() {
        return [
          {
            id: '123',
            todo: 'Laundry',
            status: 'NEW',
            date: '12/12/2020',
          },
          {
            id: '123',
            todo: 'Laundry',
            status: 'NEW',
            date: '12/12/2020',
          },
        ];
    }
}
