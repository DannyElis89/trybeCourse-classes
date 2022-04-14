import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente AppPokedex', () => {
  test('Teste se página contém um heading h2 com o texto Encountered pokémons.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const pokemonsEncontrados = screen.getByRole('heading',
      { name: 'Encountered pokémons', level: 2 });
    expect(pokemonsEncontrados).toBeInTheDocument();
  });

  test(
    'Teste se o próximo Pokémon da lista é exibido ao clicar no botão Próximo pokémon.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const botaoProx = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(botaoProx).toHaveTextContent(/próximo pokémon/i);
      expect(botaoProx).toBeInTheDocument();
    },
  );

  test(
    'Exibir o próximo Pokémon da lista ao clicar no botão "Próximo pókemon"',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const botaoProx = screen.getByRole('button', { name: /próximo pokémon/i });
      userEvent.click(botaoProx);

      const nextPokemon = screen.getByText(/charmander/i);
      expect(nextPokemon).toBeInTheDocument();

      const passaProx = 8; // são 9 pokemons no arquivo data.js
      for (let i = 0; i < passaProx; i += 1) {
        userEvent.click(botaoProx);
      }

      const pikachu = screen.getByText(/pikachu/i);
      expect(pikachu).toBeInTheDocument();
    },
  );

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const averageWeight = screen.getAllByText(/Average weight/i);
    const kg = screen.getAllByText(/kg/i);

    expect(averageWeight).toHaveLength(1);
    expect(kg).toHaveLength(1);
  });
});

describe('Teste se a Pokédex tem os botões de filtro.', () => {
  test(
    'Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const botoes = screen.getAllByTestId('pokemon-type-button');
      const expectButtons = 7;

      expect(botoes).toHaveLength(expectButtons);
    },
  );

  test(
    'Após a seleção de um tipo, a Pokédex deve mostrar somente os pokémons filtrados',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/');

      const fireFilterButton = screen.getByRole('button', { name: /fire/i });
      userEvent.click(fireFilterButton);

      const pokemonFire1 = screen.getByText(/Charmander/i);
      expect(pokemonFire1).toBeInTheDocument();

      const botaoProx = screen.getByRole('button', { name: /próximo pokémon/i });
      userEvent.click(botaoProx);

      const pokemonFire2 = screen.getByText(/Rapidash/i);
      expect(pokemonFire2).toBeInTheDocument();

      const botaoTodos = screen.getByRole('button', { name: /all/i });
      expect(botaoTodos).not.toBeDisabled();
    },
  );

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const botaoTodos = screen.getByRole('button', { name: 'All' });
    expect(botaoTodos).toBeInTheDocument();
    userEvent.click(botaoTodos);
    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toHaveTextContent('Pikachu');
  });
});
