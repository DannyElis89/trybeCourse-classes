import md5 from 'crypto-js/md5';
import store from '../store';

const getPicture = () => (dispatch) => {
  const { player: { gravatarEmail } } = store.getState();
  const url = md5(gravatarEmail).toString();

  dispatch({
    type: 'PROFILE_IMAGE',
    payload: `https://www.gravatar.com/avatar/${url}`,
  });
};

export default getPicture;
