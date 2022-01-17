# Bloco 7 - Introdução à JavaScript ES6 e Testes Unitários
## Dia 03: Primeiros passos em Jest

### Conteúdos abordados:
* Testes unitários: uma analogia ao relógio
* Testando em pequenos passos
* NodeJS Assert
* Introdução ao Jest
* Instalando o Jest
* Escrevendo testes
* Expect e matchers
* O bloco describe
* Um pouco de mão na massa

----------------

#### Escrevendo testes:

A função test espera três argumentos:

    * O primeiro argumento é o nome do teste. Esse nome identifica o teste e é também o texto que aparecerá quando os testes forem executados.
    * O segundo argumento é uma função contendo suas expectations . Em outras palavras, é dentro dessa função que você fará os testes propriamente ditos.
    * O terceiro argumento (opcional) é um timeout , indicando quanto tempo o Jest deve esperar que o teste execute antes de abortá-lo.

Na prática a função e os testes ficam em arquivos separados:

    * Jest procura por arquivos com as extensões .js , .jsx , .ts e .tsx dentro de uma pasta com o nome __tests__ , ou arquivos com o sufixo .test ou .spec .
    * É comum que o arquivo de teste tenha o mesmo nome e fique na mesma pasta do arquivo que está sendo testado, acrescido da sufixo .test.js:

~~~javascript
// sum.js
const sum = (a, b) => a + b;

module.exports = sum;
~~~

~~~javascript
// sum.test.js
const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});
~~~
    * A linha module.exports = sum exporta a função sum no primeiro arquivo para que possa ser utilizada em outros módulos. No segundo arquivo, utilizamos require('./sum') para importar a função sum .

Agora que você já viu um teste simples de jest em funcionamento, que tal praticar com mais este próximo exemplo? Não se preocupe em entender como os testes estão estruturados neste exemplo. O objetivo aqui é apenas mostrar o quanto trabalhar com a biblioteca Jest é mais simples.

    * Arquivo loginValidation.js:

Vamos primeiro entender as funções que estão implementadas no arquivo loginValidation.js. Neste arquivo encontram-se três funções para simular uma situação de login:
* A função verifyCredentials faz uma validação simples se a pessoa usuária e a senha recebidas como argumento são estritamente iguais as chaves userName e password contidas no objeto user:
    * Se essa verificação retornar true, a função verifyCredentials vai chamar a função greetingMessage , que por sua vez vai retornar uma frase de boas vindas com o nome da pessoa usuária.
    * Já no caso da verificação retornar false , ou seja as credenciais inseridas não corresponderem com as existentes no objeto, a função verifyCredentials vai chamar a função loginErrorMessage , que irá por sua vez retornar um erro.

    * Arquivo loginValidation.test.js:


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
