let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let index = 0; index < numbers.length; index +=1){
  console.log(numbers[index]);
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
  soma += numbers[index];
}
console.log('O resultado da soma de todos os valores é: ' + soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media = 0;
let soma2 = 0
for (let index = 0; index < numbers.length; index +=1){
  soma2 += numbers[index];
}
media = soma2 / numbers.length;
console.log('O array possui ' + numbers.length + ' elementos. O resultado da soma de todos os seus valores é: ' + soma + ' e a média aritmética é ' + media);
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20){
  console.log('Valor maior que 20');
} else if(media < 20){
  console.log('Valor menor que 20');
}

