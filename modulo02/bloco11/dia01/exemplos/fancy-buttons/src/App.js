import React from 'react';
import './App.css';

function botao1(){
  console.log('Clicou no botão 1')
};

function botao2(){
  console.log('Clicou no botão 2')
};

function botao3(){
  console.log('Clicou no botão 3')
};


class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={botao1}>Botão 1</button>
        <button onClick={botao2}>Botão 2</button>
        <button onClick={botao3}>Botão 3</button>
      </div>
    );
  }
}

export default App;
