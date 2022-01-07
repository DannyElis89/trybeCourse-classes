// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function functionPreventDefault(eventParametro) {
  eventParametro.preventDefault();
}

HREF_LINK.addEventListener('click', functionPreventDefault);

INPUT_CHECKBOX.addEventListener('click', functionPreventDefault);

INPUT_TEXT.addEventListener('keypress', (event) => {
  const teclaPressionada = event.key;
  console.log(teclaPressionada);
  if (teclaPressionada !== 'a') {
    event.preventDefault();
  }
});
