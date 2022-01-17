const verificaValor = (valor1, valor2) => {
  if (valor1 === '' || valor2 === '') {
    throw new Error('Insira valores numéricos em ambas caixas de entrada para fazer a verificaValor');
  }

  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    throw new Error('Os valores devem ser numéricos');
  }
  return valor1 + valor2;
}

function sum() {
  try {
    const value1 = Number(document.getElementById('value1').value);
    const value2 = Number(document.getElementById('value2').value);
    const result = verificaValor(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (e) {
    window.alert(e.message);
  }

}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
