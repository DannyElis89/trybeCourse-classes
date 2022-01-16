const botao = document.getElementById('cliqueAqui');
const paragrafoContador = document.getElementById('numCliques');
let clickCount = 0;
paragrafoContador.innerText = `${clickCount} clicks.`

botao.addEventListener('click', (event) => {
  // console.log(event.target);
  event.target = clickCount += 1;
  paragrafoContador.innerText = `${clickCount} clicks.`
})
