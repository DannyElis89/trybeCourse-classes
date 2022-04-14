import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe(
  'Teste se é renderizado um card com as informações de determinado pokémon.',
  () => {
    beforeEach(() => {
      const { history } = renderWithRouter(<App />);
      history.push('/');
    });

    test('O nome correto do Pokémon deve ser mostrado na tela', () => {
      const pokemonTestId = screen.getByTestId('pokemon-name');
      expect(pokemonTestId).toHaveTextContent('Pikachu');
    });

    test('O tipo correto do pokémon deve ser mostrado na tela.', () => {
      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent('Electric');
    });

    test('O peso médio do pokémon deve ser mostrado na tela com sua unidade de medida.',
      () => {
        const pokemonWeight = screen.getByTestId('pokemon-weight');
        expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/);
      });

    test('A imagem do Pokémon deve ser exibida e deve possui os atributos alt e src.',
      () => {
        const pokemonImg = screen.getByRole('img');
        expect(pokemonImg).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
        expect(pokemonImg).toHaveAttribute('alt', 'Pikachu sprite');
      });
  },
);

describe(
  'Teste se o card do Pokémon contém um link de navegação para exibir detalhes.',
  () => {
    beforeEach(() => {
      const { history } = renderWithRouter(<App />);
      history.push('/');
    });
    const href = '/pokemons/25';

    test(
      'O link deve possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido;',
      () => {
        const linkDetails = screen.getByRole('link', { name: /details/ });
        expect(linkDetails).toHaveAttribute('href', href);
      },
    );

    test(
      'Ao clicar no link detalhes, a aplicação vai para a página de detalhes de Pokémon.',
      () => {
        const { history } = renderWithRouter(<App />);

        const buttonMoreDetails = screen.getAllByRole('link', { name: /More details/ });
        userEvent.click(buttonMoreDetails[1]);

        expect(history.location.pathname).toBe(href);

        const pikachuDetails = screen.getByRole('heading', {
          level: 2,
          name: 'Pikachu Details',
        });

        expect(pikachuDetails).toBeInTheDocument();
      },
    );

    test('Teste se a URL exibida no navegador muda para /pokemon/<id>;',
      () => {
        const { history } = renderWithRouter(<App />);
        const buttonMoreDetails = screen.getAllByRole('link', { name: /More details/i });
        userEvent.click(buttonMoreDetails[1]);
        expect(history.location.pathname).toBe(href);
      });
  },

  describe('Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    beforeEach(() => {
      const { history } = renderWithRouter(<App />);
      history.push('/');
    });
    test(
      'O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg',
      () => {
        const buttonMoreDetails = screen.getAllByRole('link', { name: /More details/i });
        userEvent.click(buttonMoreDetails[0]);

        const starButton = screen.getAllByRole('checkbox');
        userEvent.click(starButton[0]);

        const imageFav = screen.getAllByAltText(/Pikachu is marked as favorite/);
        expect(imageFav[0]).toHaveAttribute('src', '/star-icon.svg');
        expect(imageFav[0]).toHaveAttribute('alt');
        expect(imageFav[0]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
      },
    );
  }),
);
