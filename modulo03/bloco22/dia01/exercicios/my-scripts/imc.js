const PESO_PADRAO_EM_KG = 72;
const ALTURA_PADRAO_EM_CM = 165;

const calcImc = (peso, alt) => {
  console.log(`Peso: ${peso}, Altura: ${alt}`);

  const alturaEmMetros = alt / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);

  return imc;
};

function main() {
  const imc = calcImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);

  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

module.exports = { calcImc };
