let n = 7;
for(let index = 0; index < n/2; index +=1){
  let linha = "";
  for(let i = 0; i < n; i += 1 ){
    if (((n-1)/2 - index) == i || ((n-1)/2 + index) == i || index == (n-1)/2){
      linha += "*";
    }else {
      linha += " ";
    }
  }
  console.log(linha);
}
