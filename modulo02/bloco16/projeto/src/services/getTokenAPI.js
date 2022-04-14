const getTokenAPI = async () => {
  const END_POINT = 'https://opentdb.com/api_token.php?command=request';
  const response = await fetch(END_POINT);
  const result = await response.json();
  return result;
};

export default getTokenAPI;
