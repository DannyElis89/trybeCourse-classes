const sendQuestions = (questions) => ({
  type: 'INFO',
  payload: questions,
});

const sendInformation = (score, point = 0) => ({
  type: 'MY_GIANT_TYPE_NAME',
  payload: {
    score,
    point,
  },
});

const getHistory = (info) => ({
  type: 'HISTORY',
  payload: info,
});

export { sendQuestions, sendInformation, getHistory };
