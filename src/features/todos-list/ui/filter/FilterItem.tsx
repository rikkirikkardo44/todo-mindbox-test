import React, { FC } from 'react';

import { TodosFilter } from '../../types.ts';

type Props = {
  name: TodosFilter;
  isChecked: boolean;
  onChange: (name: TodosFilter) => void;
  label: string;
};

export const FilterItem: FC<Props> = ({ label, name, onChange, isChecked }) => {
  const handleChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className="filter-item">
      <input
        id={name}
        value={name}
        checked={isChecked}
        type="radio"
        onChange={handleChange}
      />{' '}
      <label htmlFor={name}>{label}</label>
    </div>
  );
};
