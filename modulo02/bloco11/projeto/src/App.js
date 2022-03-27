import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import TodasAsCartas from './components/TodasAsCartas';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // adiciona as funções criadas ao objeto
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.valorMax = this.valorMax.bind(this);
    this.valorNegativo = this.valorNegativo.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.validaBotaoSalvar = this.validaBotaoSalvar.bind(this);
    this.validaSuperTryunfo = this.validaSuperTryunfo.bind(this);
    this.removeCarta = this.removeCarta.bind(this);

    // cria estados iniciais dos elementos
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      listaCartas: [],
    };
  }

  onInputChange({ target }) {
    // função genérica que altera valores dos estados dos componentes do form
    const { name, value, checked } = target;

    // verifica o tipo de input sofrendo alteração
    const valorTarget = target.type === 'checkbox' ? checked : value;
    this.setState({
      // altera o valor do estado do componente
      [name]: valorTarget,
    }, this.validaBotaoSalvar);
    // a função setState é assíncrona, por isso a função valida botão é passada como callback, para que só seja executada depois que os valores do estado forem alterados.
    // fonte: https://stackoverflow.com/questions/42018342/is-there-a-synchronous-alternative-of-setstate-in-reactjs

    // chama a função que verifica a existência de uma carta supertrunfo no baralho
    if (target.type === 'checkbox') {
      this.validaSuperTryunfo();
    }
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const estadoAtual = this.state;
    // adiciona os valores do estado da carta atual ao array de objetos das cartas anteriormente criadas
    this.setState(
      (acc) => ({
        listaCartas: [...acc.listaCartas, estadoAtual],
      }),
    );

    // apaga/reseta os valores adicionados anteriormente nos campos
    this.setState({
      isSaveButtonDisabled: true,
      cardRare: 'normal',
      cardImage: '',
      cardAttr3: '0',
      cardAttr2: '0',
      cardAttr1: '0',
      cardDescription: '',
      cardName: '',
      cardTrunfo: false,
    }, () => { this.validaSuperTryunfo(); });
  }

  removeCarta({ target }) {
    const cartaSelecionada = target.name;
    const trunfo = target.id;
    const { listaCartas } = this.state;

    this.setState({
      listaCartas: listaCartas
        .filter((cadaCarta) => cadaCarta.cardName !== cartaSelecionada),
    });

    if (trunfo === 'trunfo') {
      this.setState({ hasTrunfo: false });
    }
  }

  validaSuperTryunfo() {
    // verifica se já existe outra carta supertrunfo no caralho, não permitindo a adição de outra carta desta categoria caso já exista
    const { listaCartas } = this.state;
    const cartaTrunfo = listaCartas.find((cadaCarta) => cadaCarta.cardTrunfo === true);

    if (cartaTrunfo !== undefined) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  valorMax() {
    // verifica se valor máximo de cada atributo é 90 e se a soma dos 3 atributos é maior que 210
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const valorMaximo = 90;
    const somaMaxima = 210;

    const numAttr1 = Number(cardAttr1);
    const numAttr2 = Number(cardAttr2);
    const numAttr3 = Number(cardAttr3);

    return (
      numAttr1 + numAttr2 + numAttr3 <= somaMaxima
      && numAttr1 <= valorMaximo
      && numAttr2 <= valorMaximo
      && numAttr3 <= valorMaximo
    );
  }

  valorNegativo() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const numAttr1 = Number(cardAttr1);
    const numAttr2 = Number(cardAttr2);
    const numAttr3 = Number(cardAttr3);

    return (
      numAttr1 >= 0
      && numAttr2 >= 0
      && numAttr3 >= 0
    );
  }

  isEmpty() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    return !!cardName && !!cardDescription && !!cardImage && !!cardRare;
  }

  validaBotaoSalvar() {
    if (this.valorMax() && this.valorNegativo() && this.isEmpty()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      listaCartas,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
        // Renderiza form para criação e adc de novas cartas
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          validaSuperTryunfo={ this.validaSuperTryunfo }
        />
        <Card
          // Renderiza a carta recém criada SEM O BOTÃO 'apagar carta'
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <section className="ListaDeCartas">
          {/* sessão para exibição das cartas adicionadas anteriormente */}
          {/* listaCartas.map para criação e renderização do array de cartas */}
          { listaCartas.map((cadaCarta) => (
            <TodasAsCartas
            // Renderiza todas as cartas criadas anteriormente COM O BOTÃO 'apagar carta'
              key={ `key-${cadaCarta.cardName}` }
              cardName={ cadaCarta.cardName }
              cardDescription={ cadaCarta.cardDescription }
              cardAttr1={ cadaCarta.cardAttr1 }
              cardAttr2={ cadaCarta.cardAttr2 }
              cardAttr3={ cadaCarta.cardAttr3 }
              cardImage={ cadaCarta.cardImage }
              cardRare={ cadaCarta.cardRare }
              cardTrunfo={ cadaCarta.cardTrunfo }
              removeCarta={ this.removeCarta }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
