const messageDelay = () => Math.floor(Math.random() * 5000);
// messageDelay gera valor variavel entre 0 e 5 segundos que será o tempo de delay

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// gera numero variavel entre 0 e 58.

const sendMarsTemperature = () => {
  const temperaturaAtual = getMarsTemperature();
  setTimeout(() => console.log(`Mars temperature is: ${temperaturaAtual} degree Celsius`), messageDelay());
};

sendMarsTemperature();
