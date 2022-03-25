# Bloco 15: Gerenciamento de estado com Redux
## Dia 01: Introdução ao Redux - O estado global da aplicação

### Para fixar:

Agora vamos praticar os nossos conceitos e colocar a mão na massa.
    Obs: podemos testar os códigos a seguir com o Code Runner (abuse do console.log e do debug) ;
Primeiro vamos criar a nossa aplicação e instalar o Redux executando os comandos abaixo no terminal:
~~~
  npm init -y
  npm install redux
~~~

Após a instalação, vamos criar uma arquivo index.js e importar o Redux:
~~~javascript
const Redux = require('redux');
~~~

Agora vamos criar uma pequena store e vamos acessá-la, retornando o estado que guardamos nela e criando uma action para alterá-lo.
Primeiro vamos criar e retornar a nossa store :
~~~javascript
const store = Redux.createStore();
~~~

Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.
~~~javascript
const reducer = (state) => {
return state;
};

const store = Redux.createStore(reducer);
~~~

Inicialmente o state vem como undefined , e não queremos isto. Então iremos atribuir a ele um valor padrão.
~~~javascript
const reducer = (state = { login: false, email: "" }) => {
return state;
};

const store = Redux.createStore(reducer);
~~~

Agora sim, nosso reducer está pronto! Mas o que acontece se nosso valor inicial (que podemos chamar de estado inicial) ficar muito grande? Nosso código vai ficar "bagunçado" né?! Então podemos reescrevê-lo.
~~~javascript
const ESTADO_INICIAL = {
login: false,
email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
return state;
};

const store = Redux.createStore(reducer);
~~~

Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .
~~~javascript
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());

//{ login: false, email: '' }
~~~


~~~javascript

~~~


~~~javascript

~~~
