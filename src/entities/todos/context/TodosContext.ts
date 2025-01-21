import { createContext } from 'react';

import { TodoItem } from '../types.ts';

export type TodosContextState = {
  todosList: TodoItem[];
  selectedTodos: Set<string>;
};

export type TodosContextActions = {
  addTodo: (name: string) => void;
  deleteTodos: () => void;
  toggleStatus: (id: string) => void;
  toggleTodosSelected: (id: string) => void;
};

export const TodosContext = createContext<
  [TodosContextState, TodosContextActions]
>([
  {
    todosList: [],
    selectedTodos: new Set(),
  },
  {
    addTodo: () => {
      throw new Error('Method "addTodo" not implemented');
    },
    deleteTodos: () => {
      throw new Error('Method "deleteTodo" not implemented');
    },
    toggleStatus: () => {
      throw new Error('Method "toggleStatus" not implemented');
    },
    toggleTodosSelected: () => {
      throw new Error('Method "toggleTodosSelected" not implemented');
    },
  },
]);
