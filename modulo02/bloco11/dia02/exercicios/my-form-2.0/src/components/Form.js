import React, { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Resume from './Resume';
import Type from './Type';
import Cargo from './Cargo';
import City from './City';
import Estado from './Estados';
import Cpf from './Cpf';
import End from './End';
import Description from './Description';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      end: '',
      city: '',
      estado: '',
      type: '',
      resume: '',
      cargo: '',
      description: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' || target.type === 'radio') ? target.checked : target.value;
    // if (target.type === )

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h1>Formulário de cadastro de currículo</h1>
        <fieldset>
        <h2>Informações pessoais</h2>
          <Name
            style={{ textTransform: 'uppercase'}}
            limiteCaracteres={40}
            isRequired={true}
            value={this.state.name}
            handleChange={this.handleChange}
          />
          <Email
            limiteCaracteres={50}
            isRequired={true}
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <Cpf
            limiteCaracteres={11}
            isRequired={true}
            value={this.state.cpf}
            handleChange={this.handleChange}
          />
          <End
            limiteCaracteres={200}
            isRequired={true}
            value={this.state.end}
            handleChange={this.handleChange}
          />
          <City
            limiteCaracteres={28}
            isRequired={true}
            value={this.state.city}
            handleChange={this.handleChange}
          />
          <Estado
            isRequired={true}
            value={this.state.estado}
            handleChange={this.handleChange}
          />
          <Type
            isRequired={true}
            value={this.state.type}
            handleChange={this.handleChange}
          />
        </fieldset>
        <fieldset>
          <h2>Informações profissionais</h2>
          <Resume
            limiteCaracteres={100}
            isRequired={true}
            value={this.state.resume}
            handleChange={this.handleChange}
          />
          <Cargo
            limiteCaracteres={40}
            isRequired={true}
          />
          <Description
            limiteCaracteres={500}
            isRequired={true}
            value={this.state.description}
            handleChange={this.handleChange}
          />
        </fieldset>
      </div>
    )
  }
}

export default Form;
