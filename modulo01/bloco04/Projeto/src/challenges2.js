// Desafio 10
function techList(tech, name) {
  let tech1 = tech.sort();
  // console.log(tech1);
  let arrayDeObjetos = [];
  if(tech.length <= 0 || name.length <= 0){
    // console.log('Vazio!');
    return 'Vazio!';
  }

  for(let index = 0; index < tech1.length; index += 1){
    let nometetch = tech1[index];
    let novoObjeto = {
      tech: nometetch,
      name: name,
    };
    arrayDeObjetos.push(novoObjeto);
  }
  // console.log(arrayDeObjetos);
  return arrayDeObjetos;
}


// Desafio 11

function condicao2 (arrayNumbers){
  for(let index = 0; index < arrayNumbers.length; index += 1){
    if(arrayNumbers[index] < 0 || arrayNumbers[index] > 9){
      // console.log('numero menor que zero ou maior que 9')
      return false
    }
  }
  // console.log('todos os números estão entre 0 e 9.')

  return true;
}

function condicao3 (arrayNumbers){
  for(let index = 0; index < arrayNumbers.length; index += 1){
    let repeticoes = 0;
    for(let i = 0; i < arrayNumbers.length; i += 1){
      if(arrayNumbers[index] === arrayNumbers[i]){
        repeticoes += 1;
        // console.log(repeticoes);
      }
    }
    if (repeticoes >= 3){
      // console.log('repetições: ' + repeticoes);
      // console.log('3 ou mais repetições.');
      return false;
    }
  }
  // console.log('Nenhum número se repete 3 ou mais vezes.')
  return true;
}


function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length != 11){
    // console.log("Array com tamanho incorreto.")
    return "Array com tamanho incorreto."
  }

  if (condicao2(arrayNumbers) === false || condicao3(arrayNumbers) === false){
    // console.log("não é possível gerar um número de telefone com esses valores");
    return "não é possível gerar um número de telefone com esses valores";
  }

  let numTelefone = '';
  // console.log(arrayNumbers);
  for (let contador = 0; contador < arrayNumbers.length; contador += 1){
    // console.log(arrayNumbers[contador]);
    let num =  arrayNumbers[contador];
    // console.log(arrayNumbers[contador]);
    let string = num.toString();
    numTelefone += string;
  }
  // console.log(numTelefone);

  let numTelFormat = ('('+numTelefone.substr(0,2)+') '+numTelefone.substr(2,5)+'-'+numTelefone.substr(7,4));

  // console.log(numTelFormat);
  return numTelFormat;
}

// console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));




// Desafio 12
function somaLado (lineA, lineB, lineC){
  let linhaAB = lineA + lineB;
  let linhaAC = lineA + lineC;
  let linhaBC = lineB + lineC;
  if(linhaAB > lineC && linhaAC > lineB && linhaBC> lineA){
    return true;
  }
  return false;
}

function valorAbsoluto (lineA, lineB, lineC) {
  let linhaAB = Math.abs(lineA - lineB);
  let linhaBA = Math.abs(lineB - lineA);
  let linhaAC = Math.abs(lineA - lineC);
  let linhaCA = Math.abs(lineC - lineA);
  let linhaBC = Math.abs(lineB - lineC);
  let linhaCB = Math.abs(lineC - lineB);


  if(lineA > linhaBC && lineA > linhaCB && lineB > linhaAC && lineB > linhaCA && lineC > linhaAB && lineC > linhaBA){
    return true;
  }
  return false;
}

function triangleCheck(lineA, lineB, lineC) {
  if (somaLado(lineA, lineB, lineC) === true && valorAbsoluto(lineA, lineB, lineC) === true ){
    return true;
  }
  return false;
}

console.log(triangleCheck(10, 14, 8))




// Desafio 13

function extraiNumeros(bebida) {
  let numeros = bebida.replace(/[^0-9]/g,'');
  // console.log(numeros);
  return (numeros);
}


function hydrate (bebida) {
  let coposDeAgua = 0;
  let numeros = extraiNumeros(bebida);
  for(let index = 0; index < numeros.length ; index += 1){
      // console.log(numeros[index]);
      coposDeAgua += parseInt(numeros[index]);
    }
  // console.log(coposDeAgua)
  if(coposDeAgua == 1){
    return coposDeAgua + ' copo de água';
  }
  return coposDeAgua + ' copos de água';
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));









module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
