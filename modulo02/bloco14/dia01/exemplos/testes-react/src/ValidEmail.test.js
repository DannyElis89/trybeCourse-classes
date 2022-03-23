import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

describe('Validação do e-mail', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } saveemail={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } saveemail={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Mensagem de e-mail inválido só é renderizada caso o usuário clique no botão enviar após inserir email não válido', () => {
    // const EMAIL_USER = 'emailerrado';
    render(<ValidEmail />);
    expect(screen.queryByText('Email Inválido')).not.toBeInTheDocument();
  });

  it('Mensagem e-mail inválido é renderizada em vermelho, caso o e-mail seja inválido', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } saveemail={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid.style.color).toBe('red');
  });

  it('Mensagem e-mail válido é renderizada em verde, caso o e-mail seja válido', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } saveemail={ EMAIL_USER }/>);
    const isValid = screen.getByText('Email Válido');
    expect(isValid.style.color).toBe('green');
  })
})

