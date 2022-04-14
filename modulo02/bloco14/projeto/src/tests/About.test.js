import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

describe('Teste se a página contém as informações sobre a Pokédex.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    const { history } = renderWithRouter(<About />);

    history.push('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'About Pokédex', level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { history } = renderWithRouter(<About />);

    history.push('/about');

    const aboutParagraph1 = screen.getByText(/This application simulates a Pokédex, a/i);
    const aboutParagraph2 = screen
      .getByText(/One can filter Pokémons by type, and see more details/i);

    expect(aboutParagraph1).toBeInTheDocument();
    expect(aboutParagraph2).toBeInTheDocument();
  });

  test('Teste se a página contém uma imagem de uma Pokédex.', () => {
    const { history } = renderWithRouter(<About />);

    history.push('/about');

    const image = screen.getByRole('img');

    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    expect(image).toHaveAttribute('alt', 'Pokédex');
  });
});
