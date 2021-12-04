// Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// console.log('Bem-vinda, ' + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info["recorrente"]= 'Sim';

console.log('EXERCÍCIO 01: ');
for(let key in info){
  console.log(key, info[key] );
};
console.log(' ');

// 3- Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

console.log('EXERCÍCIO 02: ');
for(let key in info){
  console.log(key);
};
console.log(' ');

// 4- Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

console.log('EXERCÍCIO 03: ');
for(let key in info){
  console.log(info[key]);
};
console.log(' ');

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores:
    // personagem: 'Tio Patinhas',
    // origem: 'Christmas on Bear Mountain, Dell's Four Color Comics #178',
    // nota: 'O último MacPatinhas',
    // recorrente: 'Sim'.

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "'Christmas on Bear Mountain, Dell's Four Color Comics #178'",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('EXERCÍCIO 05: ');

for(let key in info){
  if(key === 'recorrente' && info.recorrente === 'Sim' && info2.recorrente === 'Sim'){
    console.log('Ambos recorrentes!');
  }else{
    console.log(info[key] + ' e ' + info2[key]);
  }
}
console.log(' ');
