function maiorPalavra(frase) {
  let palavraMaior;
  const arrayFrases = frase.split(' ');
  for (let i = 0; i < arrayFrases.length; i += 1){
    const cadaPalavra = arrayFrases[i];
    palavraMaior = arrayFrases[0];
    if (arrayFrases[i].length > palavraMaior.length) {
      palavraMaior = arrayFrases[i];
    }
  }
  console.log(palavraMaior);
  return(palavraMaior);
}

maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

