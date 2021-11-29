let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiornum = numbers[0];
for(let indice = 1; indice < numbers.length; indice +=1){
  if(numbers[indice] > maiornum ){
    maiornum = numbers[indice];
  }
}
console.log(maiornum)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let impares = [ ];
for(let index = 0; index <numbers.length; index += 1){
  if(numbers[index] % 2 != 0){
    impares.push(numbers[index]);
  }
}
if(impares.length == 0){
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(impares);
}


//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menornum = numbers[0];
for(let indice = 1; indice < numbers.length; indice +=1){
  if(numbers[indice] < menornum ){
    menornum = numbers[indice];
  }
}
console.log(menornum)

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let danny = [ ];
for(let posicao = 1; danny.length < 25; posicao += 1){
  danny.push(posicao);
}
console.log(danny);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let elis = [ ];
for(let posicao = 1; posicao < danny.length; posicao += 1){
  elis.push(danny[posicao]/2);
}
console.log(elis);
