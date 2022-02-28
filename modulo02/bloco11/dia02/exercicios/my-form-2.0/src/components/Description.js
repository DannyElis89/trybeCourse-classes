import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-description'>
        Descrição do cargo:
        <input
          type="textarea"
          name="description"
          id="input-description"
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

Description.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default Description;
