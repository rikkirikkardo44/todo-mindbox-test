import React, { FC, PropsWithChildren } from 'react';

import './styles.scss';

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="main-wrapper">
      <header className="main-header">
        <h1>todos</h1>
      </header>
      {children}
    </main>
  );
};
