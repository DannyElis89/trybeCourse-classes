// Desafio 1

function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3

let stringToArray = '';
function splitSentence(string) {
  stringToArray = string.split(' ');
  return stringToArray;
}
splitSentence('go Trybe');

// Desafio 4

function concatName(array) {
  let arrayParaString = '';
  let arrayAoContrario = [];
  for (let index = (array.length - 1); index >= 0; index -= 1) {
    if (index === (array.length - 1) || index === 0) {
      arrayAoContrario.push(array[index]);
    }
  }
  arrayParaString = arrayAoContrario.join(', ');
  return arrayParaString;
}

// Desafio 5

function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6

function qualMaiorNumero(array1) {
  let numeroMaior = array1[0];
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] >= numeroMaior) {
      numeroMaior = array1[index];
    }
  }
  return numeroMaior;
}

function highestCount(array) {
  let numeroMaior1 = qualMaiorNumero(array);
  let arrayMaiorNumero = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === numeroMaior1) {
      arrayMaiorNumero.push(numeroMaior1);
    }
  }
  console.log(arrayMaiorNumero.length);
  return arrayMaiorNumero.length;
}

highestCount([0, 0, 0]);

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 > distanciaCat2) {
    console.log('cat2');
    return 'cat2';
  } if (distanciaCat1 < distanciaCat2) {
    console.log('cat1');
    return 'cat1';
  } if (distanciaCat1 === distanciaCat2) {
    console.log('os gatos trombam e o rato foge');
    return 'os gatos trombam e o rato foge';
  }
}
catAndMouse(catAndMouse(1, 0, 2));

// Desafio 8

function fizzBuzz(array1) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array1.length; index += 1) {
    if (array1[index] % 3 === 0 && array1[index] % 5 != 0) {
      arrayFizzBuzz.push('fizz');
    } else if (array1[index] % 3 != 0 && array1[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else if (array1[index] % 3 === 0 && array1[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array1[index] % 3 != 0 && array1[index] % 5 != 0) {
      arrayFizzBuzz.push('bug!');
    }
  }
  console.log(arrayFizzBuzz);
  return arrayFizzBuzz;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9

function encode(string1) {
  let novaString = '';
  for (let pos = 0; pos < string1.length; pos += 1) {
    if (string1.charAt(pos) === 'a') {
      novaString += '1';
    } else if (string1.charAt(pos) === 'e') {
      novaString += '2';
    } else if (string1.charAt(pos) === 'i') {
      novaString += '3';
    } else if (string1.charAt(pos) === 'o') {
      novaString += '4';
    } else if (string1.charAt(pos) === 'u') {
      novaString += '5';
    } else {
      novaString += string1.charAt(pos);
    }
  }
  console.log(novaString);
  return novaString;
}

function decode(string2) {
  let novaString1 = '';
  for (let pos = 0; pos < string2.length; pos += 1) {
    if (string2.charAt(pos) === '1') {
      novaString1 += 'a';
    } else if (string2.charAt(pos) === '2') {
      novaString1 += 'e';
    } else if (string2.charAt(pos) === '3') {
      novaString1 += 'i';
    } else if (string2.charAt(pos) === '4') {
      novaString1 += 'o';
    } else if (string2.charAt(pos) === '5') {
      novaString1 += 'u';
    } else {
      novaString1 += string2.charAt(pos);
    }
  }
  console.log(novaString1);
  return novaString1;
}

decode('h3 th2r2!');

// Desafio 10

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
