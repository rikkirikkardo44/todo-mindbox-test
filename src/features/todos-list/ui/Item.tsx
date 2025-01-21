import React, { FC } from 'react';

import { TodoItem, TodoStatus, useTodos } from '@entities/todos';

type Props = {
  item: TodoItem;
};

export const Item: FC<Props> = ({ item }) => {
  const [, { toggleTodosSelected, toggleStatus }] = useTodos();

  const handleSelect = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
    toggleTodosSelected(item.id);
  };

  return (
    <li
      className={`todos-item${item.status === TodoStatus.Completed ? ' todos-item--completed' : ''}`}
    >
      <input type="checkbox" onChange={handleSelect} />
      <span className="todos-item__name" onClick={() => toggleStatus(item.id)}>
        {item.name}
      </span>
    </li>
  );
};
