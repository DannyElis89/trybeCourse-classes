import React, { Component } from 'react'
import '../Form.css'

class Name extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='inputName'>
        Insira seu nome:
        <br></br>
        <input
          type="text"
          name="name"
          id='inputName'
          value={ value }
          onChange={ handleChange }
        />
        </label>
    )
  }
}

export default Name;
