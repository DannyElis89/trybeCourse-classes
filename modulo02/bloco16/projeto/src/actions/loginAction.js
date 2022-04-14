function loginAction(info) {
  return {
    type: 'LOGIN',
    payload: info,
  };
}

export default loginAction;
