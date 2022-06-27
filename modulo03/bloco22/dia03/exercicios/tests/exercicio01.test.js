const { expect } = require('chai');

describe('Testa a função que retorna se o número é positivo, negativo ou neutro:', () => {
  const verificaNumero = require('../exercicio01');
  it('Verifica se, ao receber um parâmetro do tipo "number" a função verificaNumero retorna uma string:', ()=> {
    const resultado = verificaNumero(15);
    console.log(resultado);
    console.log(verificaNumero());
    expect(resultado).to.be.a('string');
  });

  it('Verifica se ao receber um número maior que zero, a função retorna a string "positivo"', () => {
    const resultado = verificaNumero(6);
    console.log(resultado);
    console.log(verificaNumero());
    expect(resultado).to.be.equals('positivo');
  });

  it('Verifica se ao receber um número meno que zero, a função retorna a string "negativo"', () => {
    const resultado = verificaNumero(-6);
    console.log(resultado);
    console.log(verificaNumero());
    expect(resultado).to.be.equals('negativo');
  });

  it('Verifica se ao receber um número igual a zero, a função retorna a string "neutro"', () => {
    const resultado = verificaNumero(0);
    console.log(resultado);
    console.log(verificaNumero());
    expect(resultado).to.be.equals('neutro');
  });
});

describe('Verifica retorno da função verificaNumero para casos em que o parâmetro informado não seja do tipo "Number"', () => {
  it('Verifica se função retorna mensagem de erro caso o parâmetro não seja um número', () => {
    const resultado = verificaNumero('AAAAA');
    expect(resultado).to.be.equals('o valor deve ser um número');
  });
});
