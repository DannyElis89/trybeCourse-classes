import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../components';

describe('Teste o componente FavoritePokemons.js', () => {
  test('Teste se é exibido na tela uma mensagem caso a pessoa não tenha favoritos.',
    () => {
      const { history } = renderWithRouter(<FavoritePokemons />);
      history.push('/favorites');
      const message = screen.getByText('No favorite pokemon found');

      expect(message).toBeInTheDocument();
    });

  test('Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    const cardsMock = [{
      id: 4,
      name: 'Charmander',
      type: 'Fire',
      averageWeight: {
        value: '8.5',
        measurementUnit: 'kg',
      },
      image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
    }];

    const { history } = renderWithRouter(<FavoritePokemons pokemons={ cardsMock } />);
    history.push('/favorites');

    const testId = screen.getAllByTestId('pokemon-name');
    expect(testId).toHaveLength(1);
  });
});
