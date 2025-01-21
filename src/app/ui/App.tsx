import React from 'react';

import { TodosProvider } from '@entities/todos';

import { MainPage } from '@pages/main';

import { MainLayout } from '@widgets/main-layout';

export function App() {
  return (
    <TodosProvider>
      <MainLayout>
        <MainPage />
      </MainLayout>
    </TodosProvider>
  );
}
