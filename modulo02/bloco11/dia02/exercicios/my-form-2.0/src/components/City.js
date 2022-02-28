import React, { Component } from 'react';
import PropTypes from 'prop-types';

class City extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-id'>
        Cidade:
        <input
          type="textarea"
          name="city"
          id="input-id"
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

City.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
}

export default City;
