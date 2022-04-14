import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions/loginAction';
import getPicture from '../actions';
import { thunkGetTokenAPI } from '../actions/tokenAction';
import { getHistory } from '../actions/sendQuestions';

class Login extends React.Component {
  state = { }

  componentDidMount() {
    const { history } = this.props;
    getHistory(history);
  }

  handleClick = async () => {
    const { getToken, history } = this.props;
    await getToken();
    history.push('/game');
  }

  handleChange = () => {
    const { sendInfo } = this.props;
    const obj = {
      name: document.getElementById('inputName').value,
      gravatarEmail: document.getElementById('inputEmail').value,
    };
    sendInfo(obj);
    const { searchImage } = this.props;
    searchImage();
  }

  render() {
    const {
      name,
      email,
      disabled,
      history,
    } = this.props;
    return (
      <div>
        <label
          className="inputName"
          htmlFor="inputName"
        >
          Insira seu nome:
          <input
            type="text"
            data-testid="input-player-name"
            id="inputName"
            name="name"
            value={ name }
            onChange={ () => this.handleChange() }
          />
        </label>
        <label className="inputEmail" htmlFor="inputEmail">
          Insira seu e-mail:
          <input
            type="text"
            data-testid="input-gravatar-email"
            id="inputEmail"
            name="email"
            value={ email }
            onChange={ () => this.handleChange() }
          />
        </label>
        <button
          className="button"
          type="button"
          data-testid="btn-play"
          disabled={ disabled }
          onClick={ () => this.handleClick() }
        >
          Play
        </button>
        <button
          className="button"
          type="button"
          data-testid="btn-settings"
          onClick={ () => {
            history.push('/configuracao');
          } }
        >
          Configurações
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendInfo: (info) => dispatch(loginAction(info)),
    searchImage: () => dispatch(getPicture()),
    getToken: () => dispatch(thunkGetTokenAPI()),
    getHistoryII: (infoII) => dispatch(getHistory(infoII)),
  };
}

function mapStateToProps(state) {
  return {
    name: state.player.name,
    email: state.player.email,
    disabled: state.player.disabled,
  };
}

Login.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  disabled: PropTypes.bool,
  searchImage: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
