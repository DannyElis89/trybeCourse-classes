function techList(tech, name) {
  let tech1 = tech.sort();
  // console.log(tech1);
  let arrayDeObjetos = [];
  if(tech.length <= 0 || name.length <= 0){
    // console.log('Vazio!');
    return 'Vazio!';
  }

  for(let index = 0; index < tech1.length; index += 1){
    let nometetch = tech1[index];
    let novoObjeto = {
      tech: nometetch,
      name: name,
    };
    arrayDeObjetos.push(novoObjeto);
  }
  // console.log(arrayDeObjetos);
  return arrayDeObjetos;
}

module.exports = techList;
