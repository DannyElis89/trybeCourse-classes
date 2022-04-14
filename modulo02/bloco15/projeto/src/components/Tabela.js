import React from 'react';
import propTypes from 'prop-types';

class Tabela extends React.Component {
  state = { }

  render() {
    const { expenses } = this.props;
    return (
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
    );
  }
}

Tabela.propTypes = {
  expenses: propTypes.arrayOf({}).isRequired,
};

export default Tabela;
