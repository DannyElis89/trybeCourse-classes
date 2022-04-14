import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa se o topo da aplicação contém um conjunto fixo de links de navegação.',
  () => {
    test('Verifica se o link home aparece na tela e se possui o texto "Home"', () => {
      renderWithRouter(<App />);
      const linkElement = screen.getByText(/home/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Verifica se o link about aparece na tela e se possui o texto "About"', () => {
      renderWithRouter(<App />);
      const linkElement = screen.getByText(/about/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Verifica se o terceiro link aparece e se possui o texto "Favorite Pokémons"',
      () => {
        renderWithRouter(<App />);
        const linkElement = screen.getByText(/Favorite Pokémons/i);
        expect(linkElement).toBeInTheDocument();
      });
  });

describe('Testa o redirecionamentoda aplicação ao clicar nos links', () => {
  test(
    'Teste se a aplicação é redirecionada para a URL "/" ao clicar no link Home.',
    () => {
      const { history } = renderWithRouter(<App />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toBeInTheDocument();
      userEvent.click(homeLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/');
    },
  );

  test(
    'Teste se a aplicação é redirecionada para a URL "/about", ao clicar no link About',
    () => {
      const { history } = renderWithRouter(<App />);

      const aboutLink = screen.getByRole('link', { name: 'About' });
      expect(aboutLink).toBeInTheDocument();
      userEvent.click(aboutLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/about');
    },
  );

  test(
    'Teste se a aplicação é direcionada para "/favorites" ao clicar em Favorite Pokémons',
    () => {
      const { history } = renderWithRouter(<App />);

      const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      expect(favoriteLink).toBeInTheDocument();
      userEvent.click(favoriteLink);

      const { pathname } = history.location;
      expect(pathname).toBe('/favorites');
    },
  );

  test(
    'Teste um caminho não existente e a renderização do Not Found',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/pagina/que-nao-existe/');

      const notFoundTitle = screen.getByRole('heading',
        { name: 'Page requested not found Crying emoji' });
      expect(notFoundTitle).toBeInTheDocument();
    },
  );
});
