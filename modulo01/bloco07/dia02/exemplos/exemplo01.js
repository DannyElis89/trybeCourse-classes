const newObject = {};

function insereChaveEValor (objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto;
}

insereChaveEValor(newObject, 'Nome', 'Danny Elis');
insereChaveEValor(newObject, 'Sobrenome', 'Simioni');
console.log(insereChaveEValor(newObject, 'Idade', '32'));
