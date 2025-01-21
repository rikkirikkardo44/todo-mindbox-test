import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { TodoStatus, useTodos } from '@entities/todos';

import { TodosFilter } from '../../../types.ts';
import { FilterContext } from './FilterContext.ts';

export const FilterProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeFilter, setActiveFilter] = useState(TodosFilter.All);
  const [{ todosList }] = useTodos();

  const filteredTodos = useMemo(() => {
    if (activeFilter === TodosFilter.All) {
      return todosList;
    }

    return todosList.filter(({ status }) =>
      activeFilter === TodosFilter.Active
        ? status === TodoStatus.Active
        : status === TodoStatus.Completed,
    );
  }, [activeFilter, todosList]);

  const changeFilter = useCallback((name: TodosFilter) => {
    setActiveFilter(name);
  }, []);

  return (
    <FilterContext.Provider
      value={[{ activeFilter, filteredTodos }, { changeFilter }]}
    >
      {children}
    </FilterContext.Provider>
  );
};
