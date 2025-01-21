import React, { FC } from 'react';

import { useTodos } from '@entities/todos';

import { List } from './List.tsx';
import { AddTodosForm } from './AddTodosForm.tsx';
import { Footer } from './Footer.tsx';
import { FilterProvider } from './filter';

import './styles.scss';

export const TodosList: FC = () => {
  const [{ todosList }] = useTodos();

  return (
    <FilterProvider>
      <section className="todos-list-section">
        <header>
          <AddTodosForm />
        </header>
        {!!todosList.length && (
          <>
            <List />
            <Footer />
          </>
        )}
        {!todosList.length && <p className="empty-stub">No todos</p>}
      </section>
    </FilterProvider>
  );
};
