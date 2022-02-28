import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Resume extends Component {
  render() {
    const { limiteCaracteres, isRequired, value, handleChange } = this.props;
    return (
      <label htmlFor='input-resume'>
        Resumo do currículo:
        <input
          type="textarea"
          name="resume"
          id="input-resume"
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

Resume.propTypes = {
  limiteCaracteres: PropTypes.number,
  isRequired: PropTypes.bool,
};

export default Resume;
