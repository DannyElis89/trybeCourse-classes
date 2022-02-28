import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Email extends Component {
  render() {
    const { limiteCaracteres, isRequired,  value, handleChange } = this.props;
    return(
      <label htmlFor='input-email'>
        Insira seu e-mail:
        <input
          type="text"
          name="email"
          id="input-email"
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

Email.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default Email;
