import React, { FC } from 'react';

import { TodosFilter } from '../../types.ts';

import { useFilter } from './context';
import { FilterItem } from './FilterItem.tsx';

const filterLabelsDictionary: Record<TodosFilter, string> = {
  [TodosFilter.All]: 'All',
  [TodosFilter.Active]: 'Active',
  [TodosFilter.Completed]: 'Completed',
};

export const Filter: FC = () => {
  const [{ activeFilter }, { changeFilter }] = useFilter();

  return (
    <div className="todos-filter">
      {Object.values(TodosFilter).map((filterName) => (
        <FilterItem
          key={filterName}
          label={filterLabelsDictionary[filterName]}
          onChange={changeFilter}
          name={filterName as TodosFilter}
          isChecked={activeFilter === filterName}
        />
      ))}
    </div>
  );
};
