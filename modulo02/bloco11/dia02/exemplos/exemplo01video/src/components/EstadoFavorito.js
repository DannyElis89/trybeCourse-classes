import React, { Component } from 'react'
import '../Form.css'

class EstadoFavorito extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='textAreaId'>
      Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
      <br></br>
        <textarea
          id="textAreaId"
          name="estadoFavorito"
          value={ value }
          onChange={ handleChange }
        />
    </label>
    )
  }
}

export default EstadoFavorito;
