# Bloco 22 - Introdução ao desenvolvimento Web com Node.js
## Dia 03: Mocha, Chai e Sinon - Testes de Back-end com Node.js
### Exemplos:

#### Testes manuais:

* **Exemplo 01:** *função que receba a média das notas de uma pessoa e responda se ela foi aprovada ou não, seguindo a seguinte regra:*

    |Média	               | Situação    |
    |:--------------------:|:-----------:|
    | Menor que 7          |	Reprovação |
    | Igual ou maior que 7 |	Aprovação  |

~~~javascript
function calculaSituacao(media) {
  if (media >= 7) {
    return 'aprovacao';
  }

  return 'reprovacao';
}
~~~

* Exemplo de testes manuais:
  * *Situação 01:*
    ~~~javascript

      console.log('Situação 01:', calculaSituacao(4));
      // console: reprovação
    ~~~

  * *Situação 02:*
    ~~~javascript
      console.log('Situação 02: Quando a média for menor que 7, retorna "reprovacao":');
      const respostaCenario1 = calculaSituacao(4);
      if (respostaCenario1 === 'reprovado') {
        console.log(`Ok 🚀`);
      } else {
        console.error('Resposta não esperada 🚨');
      }
      // console:
      // Quando a média for menor que 7, retorna "reprovacao":
      // Ok 🚀
    ~~~

  * *Situação 03:*
    ~~~javascript
      console.log('Situação 03: Quando a média for maior que 7, retorna "aprovacao":');

      const respostaCenario2 = calculaSituacao(9);
      if (respostaCenario2 === 'aprovacao') {
        console.log(`Ok 🚀`);
      } else {
        console.error('Resposta não esperada 🚨');
      }
      // console:
      // Quando a média for maior que 7, retorna "aprovacao":
      // Ok 🚀
    ~~~

  * *Situação 04:*
    ~~~javascript
    console.log('Situação 04: Quando a média for igual a 7, retorna "aprovacao":');
      const respostaCenario3 = calculaSituacao(7);
      if (respostaCenario3 === 'aprovacao') {
        console.log(`Ok 🚀`);
      } else {
        console.error('Resposta não esperada 🚨');
      }
      // console:
      // Quando a média for igual a 7, retorna "aprovacao":
      // Resposta não esperada 🚨
    ~~~

#### Tipos de testes automatizados:
* `Testes unitários`: *`escopo limitado` a um pequeno fragmento do seu código com interação mínima entre recursos externos.*
* `Testes de integração`: *Trabalham presumindo a junç`ão de múltiplos escopos` (que tecnicamente devem possuir, cada um, seus próprios testes) com interações entre eles.*
* `Testes de Ponta-a-ponta`: *Chamados também de Fim-a-fim (`End-to-End`; `E2E`), esses testes pressupõem um `fluxo de interação completo` com a aplicação, de uma ponta a outra.*

#### Testes automatizados no back end:

*`Mocha` e `Chai`: ferramentas diferentes que se complementam;*

* `Mocha`:
  * Instalação como dependência de desenvolvimento:
    > *npm install -D mocha chai*
  * Framework de testes para JS, que fornece a estrutura e interface para escrevermos os nossos testes.
  * Responsável pela execução dos testes;
  * *Exemplo de estrutura de testes fornecida pelo `Mocha` utilizando o `describe` e o `it`:*
    ~~~javascript
    describe('Quando a média for menor que 7', () => {
      it('retorna "reprovado"', () => {
        //
      });
    });
    ~~~

* `Chai`:
  * Teste unitário automatizado considerando o *Exemplo 01* acima:

    ~~~javascript
    const { expect } = require('chai');

    const calculaSituacao = require('../examples/calculaSituacao');

    describe('Quando a média for menor que 7', () => {
      it('retorna "reprovacao"', () => {
        const resposta = calculaSituacao(4);

        expect(resposta).equals('reprovacao');
      });
    });
    ~~~

* Executando os testes:
  * Criação do pacote node;
    ~~~shell
    npm init
    ~~~

  * Inclusão dos scripts necessários no arquivo `package.json`;
    ~~~javascript
    {
    // ...
      "scripts": {
        "start": "node index.js",
        "test": "mocha tests" // tests é um diretótio
      },
    // ...
    }
    ~~~

  * Execução dos testes automatizados
    ~~~shell
    npm test
    ~~~

#### Recapitulando:

|Comando                      |	Função do comando                  |
|:----------------------------|:-----------------------------------|
|npm install -D mocha chai	  | Para instalar o mocha e chai       |
|npm init                     |	Para iniciar o npm                 |
|npm install -g mocha	        | Para instalar o mocha globalmente  |
|npm run test	                | Para executar o teste              |
|npm install --save-dev sinon	| Para instalar o sinon              |
|npm test	                    | Para executar o teste              |
