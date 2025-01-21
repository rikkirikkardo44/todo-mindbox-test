import { createContext } from 'react';

import { TodoItem } from '@entities/todos';

import { TodosFilter } from '../../../types.ts';

type FilterContextState = {
  filteredTodos: TodoItem[];
  activeFilter: TodosFilter;
};

type FilterContextActions = {
  changeFilter: (name: TodosFilter) => void;
};

export const FilterContext = createContext<
  [FilterContextState, FilterContextActions]
>([
  { activeFilter: TodosFilter.All, filteredTodos: [] },
  {
    changeFilter: () => {
      throw new Error('Method "changeFilter" not implemented');
    },
  },
]);
