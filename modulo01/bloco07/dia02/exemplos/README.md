# Bloco 07:  Introdução à JavaScript ES6 e Testes Unitários
## Dia 02: JavaScript ES6 - Fluxo de exceção e Objetos

------

###  Throw e Try/Catch

![Resumo Throw e Try/Catch](https://miro.medium.com/max/662/0*nM4iZOUouJOMiB8t.png)

------

### Objetos: Parte I - Adicionando novas chaves (keys)
Para começar, veja o exemplo abaixo de um objeto que contém as informações de um cliente de uma loja:

~~~javascript
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};
~~~


Imagine um cenário em que você precisa completar as informações do cliente adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas até então é reescrever o objeto, dessa vez já com a nova propriedade lastName.

~~~javascript
const customer = {
  firstName: 'Roberto',
  lastName: 'Faria', // Propriedade adicionada.
  age: 22,
  job: 'Teacher',
};
~~~


Existem também outras formas de adicionar essa propriedade de maneira muito mais simples e prática, sem a necessidade de reescrever o objeto e suas propriedades. Veja o exemplo abaixo:

~~~javascript
const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);
~~~


No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova propriedade. Para isso, basta seguir a sintaxe abaixo:
* objeto.nomeDaPropriedade.
* objeto[variavelQueContemONomeDaPropriedade].
Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto, como a naturalidade, a data de nascimento e o estado civil.
Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

~~~javascript
const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);
~~~


No exemplo acima, você viu que há diferentes formas de associar chaves e valores a um objeto.

Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

    * Arquivo exemplo01.js

------

### Objetos: Parte II - Object.keys

Como você já sabe, objetos são um dos tipos de dados em JavaScript que possuem uma estrutura de chave e valor. Dê uma olhada no exemplo a seguir e pense como você poderia listar as chaves desse objeto:

~~~javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};
~~~


Com o que você aprendeu até o momento de objetos, você poderia utilizar a estrutura de repetição for...in . Por exemplo:

~~~javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property);
}

// name
// genre
// author
// favoriteCharacter
// quote
// seasons
~~~


Mas e se dissermos que há uma maneira mais robusta de trabalhar com objetos e seus valores?

O método Object.keys como o próprio nome diz, é utilizado para listar as chaves de um objeto, retornando-as em um array.

Cada entrada do array retornado será uma string com o valor de cada chave do objeto. Fantástico não é mesmo?

Vamos ver como ficaria nosso exemplo utilizando este método:

~~~javascript
const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const property in coolestTvShow) {
//   console.log(property);
// }

console.log(Object.keys(coolestTvShow));

// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]
~~~


Agora que você já sabe o que é o Object.keys , que tal dar uma olhadinha na sua documentação ? Leia até a seção sobre Polyfill.

Após a leitura, veja mais um exemplo de aplicação do Object.keys . Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.

~~~javascript
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};
~~~


Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade".

Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

    * Arquivo exemplo02.js

~~~javascript
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  for(index in arrayOfSkills){
    console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
  }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
~~~


<!-- ~~~javascript

~~~ -->


<!-- ~~~javascript

~~~ -->


<!-- ~~~javascript

~~~ -->


<!-- ~~~javascript

~~~ -->


<!-- ~~~javascript

~~~ -->
