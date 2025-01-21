import React, { FC, useState } from 'react';

import { useTodos } from '@entities/todos';

export const AddTodosForm: FC = () => {
  const [, { addTodo }] = useTodos();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (
    event: React.SyntheticEvent<HTMLInputElement>,
  ): void => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputValue) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form className="add-todos-form" onSubmit={handleSubmit}>
      <input
        placeholder="Write what need to do"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
