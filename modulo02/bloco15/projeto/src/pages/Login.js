import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionLoginUsuario } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, () => {
      this.verificaEmailESenha();
    });
  }

  verificaEmailESenha = () => {
    const { email, password } = this.state;

    const validaEmail = (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const validaSenha = /[\s\S]{6,}/;

    if (email.match(validaEmail) && password.match(validaSenha)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleClick = () => {
    const { history } = this.props;
    const { email } = this.state;
    const { loginUsuario } = this.props;
    loginUsuario(email);
    history.push('/carteira');
  }

  render() {
    const {
      email,
      password,
      isDisabled,
    } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            id="email"
            placeholder="Digite seu e-mail"
            onChange={ this.handleChange }
            name="email"
            value={ email }
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            data-testid="password-input"
            id="password"
            placeholder="Digite sua senha"
            onChange={ this.handleChange }
            name="password"
            value={ password }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleClick }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUsuario: (payload) => dispatch(actionLoginUsuario(payload)),
});

Login.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
