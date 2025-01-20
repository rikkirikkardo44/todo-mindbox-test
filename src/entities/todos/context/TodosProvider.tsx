import { FC, PropsWithChildren, useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { TodosContext } from './TodosContext.ts';
import { TodoItem, TodoStatus } from '@entities/todos/types.ts';

export const TodosProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todosList, setTodosList] = useState<TodoItem[]>([]);

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

  const deleteTodo = useCallback((id: string) => {
    setTodosList((prev) => prev.filter((item) => item.id !== id));
  }, []);

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

  return (
    <TodosContext.Provider
      value={[{ todosList }, { deleteTodo, addTodo, toggleStatus }]}
    >
      {children}
    </TodosContext.Provider>
  );
};
