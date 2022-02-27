import React, { Component } from 'react'
import '../Form.css'

class Email extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='email'>
        Insira seu e-mail
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    )
  }
}

export default Email;
