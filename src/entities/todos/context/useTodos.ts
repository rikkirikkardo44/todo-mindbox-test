import { useContext } from 'react';

import { TodosContext } from './TodosContext.ts';

export const useTodos = () => useContext(TodosContext);
