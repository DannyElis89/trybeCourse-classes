const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 01 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const alteraObjeto = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

alteraObjeto(lesson2, 'turno', 'noite')
console.log(lesson2);

// 02 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const chavesObjeto = (objeto) => Object.keys(objeto);
console.log(chavesObjeto(lesson2));

// 03 - Crie uma função para mostrar o tamanho de um objeto.

const tamanhoObjeto = objeto => Object.keys(objeto).length;
console.log(tamanhoObjeto(lesson3));

// 04 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valoresObjetos = objeto => Object.values(objeto);
// console.log(valoresObjetos(lesson3));

// 05 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

const allLessons = {};

const agrupaObjetos = (destino, origem1, origem2, origem3) => {
  Object.assign(destino, origem1, origem2, origem3);
}

agrupaObjetos(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons);

// 06 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = objeto => {
  let numEstudantes = 0;
  const arrayChaves = Object.keys(objeto);

  for (i in arrayChaves) {
    numEstudantes += objeto[arrayChaves[i]].numeroEstudantes;
  }
  return numEstudantes;
}

console.log(totalEstudantes(allLessons));


// 07 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (objeto, valorPosicao) => {
  return Object.values(objeto)[valorPosicao];
}

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

// 08 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (objeto, chave, valor) => {
  const arrayDeEntradas = Object.entries(objeto);
  let eIgual = false;

  for (let i in arrayDeEntradas) {
    if (arrayDeEntradas[i][0] === chave && arrayDeEntradas[i][1] === valor) {
      eIgual = true;
    }
  }
  return eIgual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
console.log(verifyPair(lesson2,'professor','Carlos'));
// Output: true
