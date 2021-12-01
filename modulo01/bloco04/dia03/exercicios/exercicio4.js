let n = 9;
for(let index = 0; index < n/2; index += 1){
  let espaco = ((n/2)-index);
  let linha = "";
  for(let i = 0; i < espaco; i += 1){
    linha += " " ;
  }
  let asterisco = (2 * index) + 1;
  for(let indice = 0; indice < asterisco; indice +=1){
    linha += "*";
  }
  console.log(linha);
}
