import React, { FC } from 'react';

import { useTodos } from '@entities/todos';

import { Filter } from './filter';

export const Footer: FC = () => {
  const [{ selectedTodos }, { deleteTodos }] = useTodos();

  return (
    <footer className="todos-list-footer">
      <Filter />
      {!!selectedTodos.size && <button onClick={deleteTodos}>Delete</button>}
    </footer>
  );
};
