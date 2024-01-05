import {Entity, belongsTo, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model()
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
    if (typeof data?.todoListId !== 'undefined') {
      this.todoListId = data.todoListId;
    }
  }
}

export interface TodoRelations {
  // describe navigational properties here
  todoList?:TodoListWithRelations
}

export type TodoWithRelations = Todo & TodoRelations;
