import { GET_TOKEN_API_SUCCESS } from '../actions/tokenAction';

const INITIAL_STATE = {
  token: '',
};

const token = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_TOKEN_API_SUCCESS:
    return action.token;
  default:
    return state;
  }
};

export default token;
