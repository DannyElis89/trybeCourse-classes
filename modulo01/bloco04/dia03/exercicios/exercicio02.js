// 02 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let palavraAoContrario = '';
for(let index = (word.length - 1); index >= 0 ; index -= 1){
  palavraAoContrario += word[index];
}
console.log(palavraAoContrario);


