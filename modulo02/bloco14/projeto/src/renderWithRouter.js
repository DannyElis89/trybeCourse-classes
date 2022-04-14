import React from "react";
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const renderWithRouter = (component) => {
  // recebe um componente como parâmetro, componente esse que será renderizado.
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{component}</Router>),history,
  });
}

export default renderWithRouter;
