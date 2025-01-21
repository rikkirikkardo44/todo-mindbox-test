import React, { FC } from 'react';

import { Item } from './Item.tsx';
import { useFilter } from './filter';

export const List: FC = () => {
  const [{ filteredTodos }] = useFilter();

  return (
    <ul className="todos-list">
      {filteredTodos.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
