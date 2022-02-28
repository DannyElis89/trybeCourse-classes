import React, { Component } from 'react';

class Type extends Component {
  render() {
    const { isRequired, value, handleChange } = this.props;
    return (
      <section>
        <span>Tipo de residência: </span>
        <label htmlFor='casa'>
          Casa
          <input
            type="radio"
            name="type"
            id="casa"
            value={ value }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor='apartamento'>
          Apartamento
          <input
            type="radio"
            name="type"
            id="apartamento"
            required={ isRequired }
            value={ value }
            onChange={ handleChange }
          />
        </label>
      </section>

    )
  }
}

export default Type;


// <input type="radio" id="html" name="fav_language" value="HTML">
// <label for="html">HTML</label><br>
// <input type="radio" id="css" name="fav_language" value="CSS">
// <label for="css">CSS</label><br>
// <input type="radio" id="javascript" name="fav_language" value="JavaScript">
// <label for="javascript">JavaScript</label>
