import React, { Component } from 'react'
import '../Form.css'

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='inputIdade'>
        Insira a sua idade:
        <br></br>
        <input
          type="number"
          name="idade"
          id='inputIdade'
          value={ value }
          onChange={ handleChange }
        />
      </label>
    )
  }
}

export default Idade;
