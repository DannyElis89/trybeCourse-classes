// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function functionPreventDefault(eventParametro) {
  eventParametro.preventDefault();
}

HREF_LINK.addEventListener('click', functionPreventDefault);

INPUT_CHECKBOX.addEventListener('click', functionPreventDefault);

function prevDefaultKey(parametroTecla) {
  // if (parametroTecla.key == 'A') {
  //   console.log('Letra A');
  // } else {
  //   console.log('Outra letra');
  // }
  console.log(parametroTecla.target);
}

INPUT_CHECKBOX.addEventListener('keyup', prevDefaultKey);
