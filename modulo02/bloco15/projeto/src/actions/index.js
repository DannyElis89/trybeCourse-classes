export const USER_INFO = 'ADD_USER_INFO';
export const ADD_CURRENCIES = 'ADD_CURRENCIES';
export const REQUISICAO_API = 'REQUISICAO_API';
export const GET_EXCHANGE = 'GET_EXCHANGE';
export const SAVE_STATE = 'SAVE_STATE';
export const DESPESAS_TOTAIS = 'DESPESAS_TOTAIS';
export const DEFINE_TABELA = 'DEFINE_TABELA';

export const actionLoginUsuario = (payload) => ({
  type: USER_INFO,
  payload,
});

export const infosCarteira = () => ({
  type: REQUISICAO_API,
});

export const actionCurrencies = (payload) => ({
  type: ADD_CURRENCIES,
  payload,
});

export const fetchAPI = () => async (dispatch) => {
  try {
    dispatch(infosCarteira());

    const resposta = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotacao = await resposta.json();

    const currencies = (Object.keys(cotacao)).filter((currencie) => currencie !== 'USDT');
    dispatch(actionCurrencies(currencies));
  } catch (error) {
    console.log(error);
  }
};

export const salvaEstado = (payload) => ({ type: SAVE_STATE, payload });

export const despesasTotais = (payload) => ({ type: DESPESAS_TOTAIS, payload });

export const getExchangeRates = (payload) => ({ type: GET_EXCHANGE, payload });

export const fetchExchange = () => async (dispatch) => {
  try {
    dispatch(infosCarteira());

    const resposta = await fetch('https://economia.awesomeapi.com.br/json/all');
    const cotacao = await resposta.json();

    dispatch(getExchangeRates(cotacao));
  } catch (error) {
    console.log(error);
  }
};

export const defineTabela = (payload) => ({ type: DEFINE_TABELA, payload });
