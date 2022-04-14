import getTokenAPI from './getTokenAPI';
import { actionGetTokenAPISuccess } from '../actions/tokenAction';
import store from '../store';
import { sendQuestions } from '../actions/sendQuestions';

async function getQuestions() {
  const { token } = store.getState();
  const END_POINT = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(END_POINT);
  const questions = await response.json();

  if (questions.response_code === 0) {
    store.dispatch(sendQuestions(questions));
  } else {
    const { token: newToken } = await getTokenAPI();
    await store.dispatch(actionGetTokenAPISuccess(newToken));
    await getQuestions();
  }
}

export default getQuestions;
