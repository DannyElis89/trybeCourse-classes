import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { fetchAPI, salvaEstado, despesasTotais } from '../actions';
import Header from './Header';

class FormDespesas extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: '',
      id: 0,
      method: '',
      tag: '',
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { getCurr } = this.props;
    getCurr();
    // getExchangeRates();
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({ [name]: value });
  }

  handleClick = async () => {
    const { id } = this.state;
    const { atualizaEstado, getDespesasTotais } = this.props;

    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const exchangeRates = await response.json();

    atualizaEstado({
      ...this.state,
      exchangeRates,
    });

    this.setState({
      id: id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }, () => getDespesasTotais());
  }

  render() {
    const { currencies, expenses } = this.props;
    // console.log(typeof expenses, expenses);
    const { value, description, currency, method } = this.state;

    return (
      <>
        <Header />
        <form>
          <label htmlFor="input-valor-despesa">
            Valor da despesa:
            <input
              type="number"
              id="input-valor-despesa"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="input--name-despesa">
            Descrição da despesa:
            <input
              type="text"
              id="input--name-despesa"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="input-moeda">
            Moeda:
            <select
              name="currency"
              id="input-moeda"
              value={ currency }
              onChange={ this.handleChange }
            >
              {currencies.map((curr) => (
                <option
                  value={ curr }
                  key={ curr }
                >
                  {curr}
                </option>

              ))}
            </select>
          </label>
          <label htmlFor="input-metodo">
            Método de pagamento:
            <select
              id="input-metodo"
              data-testid="method-input"
              name="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            Categoria
            <select
              id="tag-input"
              name="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
              multiple
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Lazer">Lazer</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
        <table>
          <thead>
            <tr border="1">
              <th>Descrição </th>
              <th>Tag </th>
              <th>Método de pagamento </th>
              <th>Valor </th>
              <th>Moeda</th>
              <th>Câmbio utilizado </th>
              <th>Valor convertido </th>
              <th>Moeda de conversão </th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses
            && expenses.map((item) => (
              <tr key={ item.id }>
                <td>{item.description}</td>
                <td>{item.tag}</td>
                <td>{item.method}</td>
                <td>{Number(item.value).toFixed(2)}</td>
                <td>{item.exchangeRates[item.currency].name}</td>
                <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(item.value) * Number(item.exchangeRates[item.currency].ask))
                    .toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button" data-testid="edit-btn">Editar</button>
                  <button type="button" data-testid="delete-btn">Excluir</button>
                </td>
              </tr>))
            }
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurr: () => dispatch(fetchAPI()),
  atualizaEstado: (state) => dispatch(salvaEstado(state)),
  getDespesasTotais: () => dispatch(despesasTotais()),
});

FormDespesas.propTypes = {
  getCurr: propTypes.func.isRequired,
  currencies: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  atualizaEstado: propTypes.func.isRequired,
  getDespesasTotais: propTypes.func.isRequired,
  expenses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDespesas);
