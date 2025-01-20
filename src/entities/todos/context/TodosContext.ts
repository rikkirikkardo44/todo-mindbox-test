import { createContext } from 'react';
import { TodoItem } from '@entities/todos/types.ts';

export type TodosContextState = {
  todosList: TodoItem[];
};

export type TodosContextActions = {
  addTodo: (name: string) => void;
  deleteTodo: (id: string) => void;
  toggleStatus: (id: string) => void;
};

export const TodosContext = createContext<
  [TodosContextState, TodosContextActions]
>([
  {
    todosList: [],
  },
  {
    addTodo: () => {
      throw new Error('Method "addTodo" not implemented');
    },
    deleteTodo: () => {
      throw new Error('Method "deleteTodo" not implemented');
    },
    toggleStatus: () => {
      throw new Error('Method "toggleStatus" not implemented');
    },
  },
]);
