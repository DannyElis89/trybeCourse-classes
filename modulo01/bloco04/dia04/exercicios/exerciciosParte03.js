// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function inverterPalavra(parametro1){
  let palavraContrario = '';
  for(let index = (parametro1.length - 1) ; index >= 0; index -= 1 ){
    palavraContrario += parametro1[index];
  };
  return palavraContrario;

}

function verificaPalindrome(parametro2){
  let fimParaComeco = inverterPalavra(parametro2);
  return (parametro2 === fimParaComeco);
  // if(parametro2 === fimParaComeco ){
    // return true
  // }
  // return false
};
let palavra = 'DannyynnaD';
console.log(verificaPalindrome(palavra));

