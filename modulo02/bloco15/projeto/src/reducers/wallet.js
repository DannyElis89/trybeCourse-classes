// Esse reducer será responsável por tratar o todas as informações relacionadas as expenses
import { ADD_CURRENCIES, SAVE_STATE, DESPESAS_TOTAIS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  total: 0,
};

const somaDespesas = (state) => {
  if (state.expenses) {
    // console.log(state.expenses);
    const somaTotal = state.expenses.map(({ currency, value, exchangeRates }) => (
      (Number(value) * Number(exchangeRates[currency].ask))))
      .reduce((anterior, atual) => anterior + atual, 0).toFixed(2);
    return somaTotal;
  }
};

const carteira = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  case SAVE_STATE:
    state.expenses.push(payload);
    return state;

  case DESPESAS_TOTAIS:
    return { ...state, total: somaDespesas(state) };

  default: return state;
  }
};

export default carteira;
