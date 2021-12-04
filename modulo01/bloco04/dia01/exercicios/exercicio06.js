// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
    // * Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
    // * Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
    // * Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
    // * Exemplo: bishop (bispo) -> diagonals (diagonais).

function movimentoXadrez(item){
  if(item == 'peão'){
    return 'se move somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão é a única peça que não pode mover-se para trás.'
  } else if (item == 'torre'){
    return 'se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça. Ele não pode pular outras peças.'
  } else if (item == 'bispo'){
    return 'se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça. O bispo não pode pular outras peças.'
  } else if (item == 'cavalo'){
    return 'move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um “L”.'
  }else if (item == 'rainha'){
    return 'pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.'
  } else {
    return 'pode se mover para qualquer casa adjacente. Assim, ele pode mover-se uma casa em qualquer direção: horizontalmente, verticalmente ou diagonalmente. '
  }
}

let pecas = ['peão', 'torre', 'cavalo', 'bispo', 'rainha', 'rei'];

for(let index = 0; index < pecas.length; index += 1){
  console.log('A peça ' + pecas[index] + ' ' + movimentoXadrez(pecas[index]) + '.')
}

// let pecaxadrez = '';
// let pecaXadrez1 = pecaxadrez.toLowerCase();
// console.log(movimentoXadrez(pecaXadrez1))

