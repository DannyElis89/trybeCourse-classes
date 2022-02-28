import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cpf extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-cpf'>
        Insira seu CPF:
        <input
          type="text"
          name='cpf'
          id='input-cpf'
          className='input-text'
          required={isRequired}
          maxLength={limiteCaracteres}
          value={ value }
          onChange={ handleChange }

        />
      </label>
    )
  }
}

Cpf.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default Cpf;
