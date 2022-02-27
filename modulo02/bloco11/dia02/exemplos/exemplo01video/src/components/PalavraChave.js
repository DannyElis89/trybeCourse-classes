import React, { Component } from 'react'
import '../Form.css'

class PalavraChave extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='palavraChaveFavorita'>
        Escolha sua palavra chave favorita:
        <br></br>
        <select
          name='palavraChaveFavorita'
          id='palavraChaveFavorita'
          value={ value }
          onChange={ handleChange }
        >
          <option value="estado">Estado</option>
          <option value="evento">Evento</option>
          <option value="props">Props</option>
          <option value="hooks">Hooks</option>
        </select>
      </label>
    )
  }
}

export default PalavraChave;
