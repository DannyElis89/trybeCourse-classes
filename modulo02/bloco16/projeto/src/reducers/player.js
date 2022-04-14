const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  disabled: true,
  players: [],
};

function stringTest(string) {
  return string.length > 0;
}

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.gravatarEmail,
      disabled: !(stringTest(action.payload.name)
        && stringTest(action.payload.gravatarEmail)),
    };
  case 'PROFILE_IMAGE':
    return {
      ...state,
      gravatarImage: action.payload,
    };
  case 'MY_GIANT_TYPE_NAME':
    return {
      ...state,
      score: state.score + action.payload.score,
      assertions: state.assertions + action.payload.point,
    };
  case 'HISTORY':
    return {
      ...state,
      history: action.payload,
    };
  case 'RANKING':
    return {
      ...state,
      players: [...state.players, action.payload],
    };
  case 'ZERAR':
    return {
      ...state,
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
      disabled: true,
    };
  default:
    return state;
  }
};

export default player;
