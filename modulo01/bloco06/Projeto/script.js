// projeto realizado pelas alunas Cinthya e Danny Elis
const botaoSubmit = document.getElementById('submit');
const inputSenha = document.getElementById('input-password');
const inputEmail = document.getElementById('input-email1');

botaoSubmit.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

const caixaCheck = document.getElementById('agreement');
const botaoSubmitBtn = document.getElementById('submit-btn');
caixaCheck.addEventListener('change', () => {
  if (caixaCheck.checked === true) {
    botaoSubmitBtn.disabled = false;
  } else {
    botaoSubmitBtn.disabled = true;
  }
  // Fonte: https://cursos.alura.com.br/forum/topico-habitar-desabilitar-botao-65202
});

// Requisito bônus número 20:

const paragrafoContador = document.getElementById('counter');

const textArea = document.getElementById('textarea');
paragrafoContador.innerText = 500 - parseInt(document.getElementById('textarea').value.length, 10);

textArea.addEventListener('keyup', () => {
  const textAreaValue = textArea.value;
  const textLength = textAreaValue.length;
  paragrafoContador.innerText = 500 - parseInt(textLength, 10);
});

// Requisito bônus número 21:
const listaDeMaterias = document.getElementsByName('materias');

for (let i = 0; i < listaDeMaterias.length; i += 1) {
  const cadaItemLista = listaDeMaterias[i];
  cadaItemLista.addEventListener('change', () => {
    cadaItemLista.setAttribute('class', 'subject');
  });
}

const objetoForm = {};

function selecionaFamilia() {
  const familia = document.getElementsByName('family');
  for (let i = 0; i < familia.length; i += 1) {
    const opcao = familia[i];
    if (opcao.checked === true) {
      objetoForm.Família = document.getElementsByName('family')[i].value;
      return objetoForm.Família;
    }
  }
}

function selecionaMateria() {
  const listaMaterias = document.getElementsByName('materias');
  const arrayMaterias = [];

  for (let i = 0; i < listaMaterias.length; i += 1) {
    const cadaMateria = listaMaterias[i];
    if (cadaMateria.checked === true) {
      arrayMaterias.push(` ${cadaMateria.value}`);
    }
  }
  objetoForm.Matérias = arrayMaterias;
  return objetoForm.Matérias;
}

function avaliacao() {
  const botaoRadio = document.getElementsByName('rate');

  for (let i = 0; i < botaoRadio.length; i += 1) {
    const cadaBotao = botaoRadio[i];
    if (cadaBotao.checked === true) {
      objetoForm.Avaliação = cadaBotao.value;
      return objetoForm.Avaliação;
    }
  }
}

function apagaApagina() {
  const apagaForm = document.getElementById('evaluation-form');
  apagaForm.innerHTML = ' ';
}

function capturaValores() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;

  objetoForm.Nome = `${nome} ${sobrenome}`;
  objetoForm.Email = document.getElementById('input-email').value;
  objetoForm.Casa = document.getElementById('house').value;
  objetoForm.Observações = document.getElementById('textarea').value;

  return objetoForm;
}

botaoSubmitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  capturaValores();
  selecionaFamilia();
  selecionaMateria();
  avaliacao();
  apagaApagina();

  const novoTexto = document.getElementById('evaluation-form');

  novoTexto.innerText = `Nome: ${objetoForm.Nome}\n`;
  novoTexto.innerText += `Email: ${objetoForm.Email}\n`;
  novoTexto.innerText += `Casa: ${objetoForm.Casa}\n`;
  novoTexto.innerText += `Família: ${objetoForm.Família}\n`;
  novoTexto.innerText += `Matérias: ${objetoForm.Matérias}\n`;
  novoTexto.innerText += `Avaliação: ${objetoForm.Avaliação}\n`;
  novoTexto.innerText += `Observações: ${objetoForm.Observações}`;
});
