import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.botao1 = this.botao1.bind(this);
    this.botao2 = this.botao2.bind(this);
    this.botao3 = this.botao3.bind(this);

    this.state = {
      numeroDeCliquesBotao1: 0,
      numeroDeCliquesBotao2: 0,
      numeroDeCliquesBotao3: 0
    }
  }

  corBotao(num) {
    return num % 2 === 0 ? 'green' : 'red';
  }

  botao1() {
    console.log(`Botão 1 ${this.corBotao(this.state.numeroDeCliquesBotao1)}`);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBotao1: estadoAnterior.numeroDeCliquesBotao1 + 1
    }))
  };

  botao2() {
    console.log(`Botão 2 ${this.corBotao(this.state.numeroDeCliquesBotao2)}`);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBotao2: estadoAnterior.numeroDeCliquesBotao2 + 1
    }))
  };

  botao3() {
    console.log(`Botão 3 ${this.corBotao(this.state.numeroDeCliquesBotao3)}`);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquesBotao3: estadoAnterior.numeroDeCliquesBotao3 + 1
    }))
  };

  render() {
    return (
      <div className='container'>
        <header>
          <h1>Bloco 11 - Componentes com Estado, Eventos e Formulários com React</h1>
          <h2>Componentes com estado e eventos.</h2>
        </header>

        <div className='divTodosBotoes'>
          <div className='divsBotoes'>
            <button
              onClick={this.botao1}
              style={{ backgroundColor: this.corBotao(this.state.numeroDeCliquesBotao1) }}
            >Botão 1</button>
            <p>{`${this.state.numeroDeCliquesBotao1} cliques no botão 1.`}</p>
          </div>
          <div className='divsBotoes'>
            <button
              onClick={this.botao2}
              style={{ backgroundColor: this.corBotao(this.state.numeroDeCliquesBotao2) }}
            >Botão 2</button>
            <p>{`${this.state.numeroDeCliquesBotao2} cliques no botão 2.`}</p>
          </div>
          <div className='divsBotoes'>
            <button
              onClick={this.botao3}
              style={{ backgroundColor: this.corBotao(this.state.numeroDeCliquesBotao3) }}
            >Botão 3</button>
            <p>{`${this.state.numeroDeCliquesBotao3} cliques no botão 3.`}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
