import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label htmlFor='textAreaId'>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea id="textAreaId"
                name="estadoFavorito"
                value={this.state.estadoFavorito}
                onChange={this.handleChange} />
          </label>
          <label htmlFor='inputIdade'>
            Insira a sua idade:
            <input
              type="number"
              name="idade"
              id='inputIdade'
            />
          </label>
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;
