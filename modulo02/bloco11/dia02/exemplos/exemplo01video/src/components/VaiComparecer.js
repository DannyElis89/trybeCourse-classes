import React, { Component } from 'react'
import '../Form.css'

class VaiComparecer extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor='checkVaiComparecer'>
        Vou comparecer
        <input
          type="checkbox"
          name="vaiComparecer"
          id='checkVaiComparecer'
          value={ value }
          onChange={ handleChange }
        />
      </label>
    )
  }
}

export default VaiComparecer;
