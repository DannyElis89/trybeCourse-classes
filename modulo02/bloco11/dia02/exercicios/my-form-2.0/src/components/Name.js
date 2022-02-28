import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const { style, limiteCaracteres, isRequired, value, handleChange } = this.props;
    return(
      <label htmlFor='input-name'>
        Insira seu nome:
        <input
          type="text"
          name="name"
          id="input-name"
          className='input-text'
          required={isRequired}
          maxLength={limiteCaracteres}
          style={style}
          value={ value }
          onChange={ handleChange }

        />
      </label>
    )
  }
}

Name.propTypes = {
  limiteCaracteres:PropTypes.number,
  isRequired: PropTypes.bool,
}

export default Name;
