import getTokenAPI from '../services/getTokenAPI';

export const GET_TOKEN_API_SUCCESS = 'GET_TOKEN_API_SUCCESS';

export const actionGetTokenAPISuccess = (token) => ({
  type: GET_TOKEN_API_SUCCESS,
  token,
});

export const thunkGetTokenAPI = () => async (dispatch) => {
  const { token } = await getTokenAPI();
  dispatch(actionGetTokenAPISuccess(token));
};
