import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { TodoItem, TodoStatus } from '../types.ts';
import { TodosContext } from './TodosContext.ts';

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todosList, setTodosList] = useState<TodoItem[]>([]);
  const [selectedTodos, setSelectedTodos] = useState<Set<string>>(
    new Set<string>(),
  );

  const addTodo = useCallback((name: string) => {
    setTodosList((prev) => [
      ...prev,
      {
        name,
        id: uuid(),
        createDate: Date.now().toString(),
        status: TodoStatus.Active,
      },
    ]);
  }, []);

  const deleteTodos = useCallback(() => {
    setTodosList((prev) => prev.filter((item) => !selectedTodos.has(item.id)));
    setSelectedTodos(new Set());
  }, [selectedTodos]);

  const toggleStatus = useCallback((id: string) => {
    setTodosList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            status:
              item.status === TodoStatus.Active
                ? TodoStatus.Completed
                : TodoStatus.Active,
          };
        }

        return item;
      }),
    );
  }, []);

  const toggleTodosSelected = useCallback((id: string): void => {
    setSelectedTodos((prev) => {
      const copy = new Set(prev);

      if (copy.has(id)) {
        copy.delete(id);
      } else {
        copy.add(id);
      }

      return copy;
    });
  }, []);

  return (
    <TodosContext.Provider
      value={[
        { todosList, selectedTodos },
        { deleteTodos, addTodo, toggleStatus, toggleTodosSelected },
      ]}
    >
      {children}
    </TodosContext.Provider>
  );
};
