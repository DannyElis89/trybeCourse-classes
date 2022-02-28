import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cargo extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-cargo'>
        Cargo:
        <input
          type="textarea"
          name="cargo"
          id="input-cargo"
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

Cargo.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default Cargo;
