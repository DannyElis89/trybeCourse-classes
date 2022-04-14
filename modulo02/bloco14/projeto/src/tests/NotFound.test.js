import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../components';

describe('Teste o componente NotFound', () => {
  test('Teste se página contém um h2 com o texto Page requested not found 😭', () => {
    const { history } = renderWithRouter(<NotFound />);
    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Page requested not found Crying emoji' });
    expect(notFoundTitle).toBeInTheDocument();
  });

  test('Teste se página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { history } = renderWithRouter(<NotFound />);
    history.push('/pagina/que-nao-existe/');

    const image = screen.getByAltText(/crying/i);

    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    expect(image)
      .toHaveAttribute('alt', 'Pikachu crying because the page requested was not found');
  });
});
