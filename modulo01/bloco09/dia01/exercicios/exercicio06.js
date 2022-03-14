// gera tempo aleatório de delay de mensagem
const messageDelay = () => Math.floor(Math.random() * 5000);
// gera temperatura aleatória
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

// converte temperatura de graus celsius para fahrenheit
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// imprime a mensagem com a informação de temperatura em fahrenheit
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// imprime a mensagem com a temperatura em graus celsius
const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// imprime mensagem de erro
const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);


// função que envia a temperatura de marte
const sendMarsTemperature = (onSuccess, onError) => {
  // constante que recebe o valor da temperatura atual de marte
  const currentTemperature = getMarsTemperature();

  // constante que gera valor variável. Determina chance de sucesso ou falha da função.
  const messageSuccessfullySent = Math.random() <= 0.6;

  // função assíncrona.
  setTimeout(() => {
      if(messageSuccessfullySent) onSuccess(currentTemperature)
      else onError('Robot is busy');
  }, messageDelay());
}


// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
