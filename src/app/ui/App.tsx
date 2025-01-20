import * as React from 'react';

import { TodosProvider } from '@entities/todos';

export function App() {
  return (
    <TodosProvider>
      <main>App</main>
    </TodosProvider>
  );
}
