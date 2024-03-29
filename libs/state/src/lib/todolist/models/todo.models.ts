export interface Todo {
  id: string;
  todo: string;
  status: TodoStatus;
  date: string;
}

export enum TodoStatus {
  NEW = 'new',
  ACTIVE = 'active',
  COMPLETE = 'complete',
  POSTPONED = 'postponed',
}
