// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// * A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
//      * INSS (Instituto Nacional do Seguro Social)
//         * Salário bruto até R$ 1.556,94: alíquota de 8%
//         * Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//         * Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//         * Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
//      * IR (Imposto de Renda)
//         * Até R$ 1.903,98: isento de imposto de renda
//         * De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//         * De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//         * De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//         * Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

function descontoINSS(x){
  let aliquotaINSS;

  if(x <= 1556.94){
    aliquotaINSS = (x * 0.08);
  } else if (x >= 1556.95 && x <= 2594.92){
    aliquotaINSS = (x * 0.09);
  } else if (x >= 2594.93 && x <= 5189.82){
    aliquotaINSS = (x * 0.11);
  }else{
    aliquotaINSS = 570.88;
  };
  return aliquotaINSS;
};

function descontoIR(y){
  let valordescontoIR = 0;
  let parcela = 0;
  if(y <= 1903.98){
    valordescontoIR = 0;
    parcela = 0;
  } else if (y >= 1903.99 && y <= 2826.65){
    valordescontoIR = (y * 0.075);
    parcela = 142.80;
  } else if (y >= 2826.66 && y <= 3751.05){
    valordescontoIR = (y * 0.15);
    parcela = 354.80 ;
  } else if (y >= 3751.06 && y <= 4664.68){
    valordescontoIR = (y * 0.225);
    parcela = 636.13;
  } else{
    valordescontoIR = (y * 0.275);
    parcela = 869.36;
  }
  let descontoTotalIR = valordescontoIR - parcela;
  return descontoTotalIR;
};

function valorSalarioLiquido(bruto){
  let salarioBase= bruto - descontoINSS(bruto);
  let salarioLiquido = salarioBase - descontoIR(salarioBase);
  return salarioLiquido
}

let salarioBruto = 3000.00
console.log(valorSalarioLiquido(salarioBruto))




