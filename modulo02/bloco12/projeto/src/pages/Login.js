import React from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Button from '../components/Button';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      disableButton: true,
      loading: false,
      redirectTo: null,
    };
  }

  handleChange = ({ target }) => {
    const caracterMin = 3;

    this.setState({
      nameInput: target.value,
      disableButton: (target.value.length < caracterMin),
    });
  }

  newUser = async () => {
    const { nameInput } = this.state;
    this.setState({ loading: true });

    await createUser({ name: nameInput });
    this.setState({
      loading: false,
      redirectTo: '/search',
    });
  }

  render() {
    const {
      nameInput,
      disableButton,
      loading,
      redirectTo,
    } = this.state;
    if (redirectTo) {
      return (<Redirect to={ redirectTo } />
      );
    }
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="input-name">
            Insira seu nome:
            <input
              type="text"
              data-testid="login-name-input"
              id="input-name"
              name="nameInput"
              onChange={ this.handleChange }
              value={ nameInput }
            />
          </label>
          <Button
            datatestid="login-submit-button"
            name="enableButton"
            disabled={ disableButton }
            onClick={ this.newUser }
            text="Entrar"
          />
          {loading && <Loading />}
        </form>
      </div>
    );
  }
}

export default Login;
