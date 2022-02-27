import React, { Component } from 'react';
import './Form.css';
import EstadoFavorito from './components/EstadoFavorito';
import Email from './components/Email';
import Name from './components/Name';
import Idade from './components/Idade';
import VaiComparecer from './components/VaiComparecer';
import PalavraChave from './components/PalavraChave';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      name: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChave: ''
    };
  }

  handleChange({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <EstadoFavorito
            value={this.state.estadoFavorito}
            handleChange={this.handleChange}
          />
          <Email
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <Name
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <Idade
            value={this.state.idade}
            handleChange={this.handleChange}
          />
          <VaiComparecer
            value={this.state.vaiComparecer}
            handleChange={this.handleChange}
          />
          <PalavraChave
            value={this.state.palavraChave}
            handleChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
