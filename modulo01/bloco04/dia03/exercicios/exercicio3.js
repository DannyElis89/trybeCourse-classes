// Exercício 03: imprima um triângulo retângulo com n asteriscos de base.
let n = 5;

for(let index = 0; index < n; index += 1){
  let linha = "";
  for(let i = 0; i < n; i += 1){
    if (i + index < n - 1){
      linha += " ";
    }else{
      linha += "*";
    }
  }
  console.log(linha);
}

