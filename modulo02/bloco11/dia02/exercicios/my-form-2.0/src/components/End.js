import React, { Component } from 'react';
import PropTypes from 'prop-types';

class End extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-end'>
        Endereço:
        <input
          type="text"
          name="end"
          id="input-end"
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

End.propTypes = {
    limiteCaracteres: PropTypes.number,
    isRequired: PropTypes.bool,
};

export default End;
