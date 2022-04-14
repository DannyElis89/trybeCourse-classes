const caminho = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  try {
    const response = await fetch(caminho);
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchCurrencies;
