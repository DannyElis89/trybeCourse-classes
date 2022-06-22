# Bloco 22: Introdução ao desenvolvimento Web com Node.js
## Dia 02: Intro - Node.js - Fluxo Assíncrono

### Exemplos:

#### Exemplo 01 - Lendo arquivos com métodos síncronos:

Se quisermos ler um arquivo de maneira assíncrona, o Javascript não vai esperar o arquivo inteiro ser lido para só então dar continuidade ao script. Porém, se quisermos esse comportamento de pausa, precisamos de um método síncrono.

O método disponibilizado pelo módulo fs para leitura síncrona de arquivos é o fs.readFileSync. Vamos utilizá-lo no exemplo a seguir, mas antes devemos realizar os seguintes passos:

  * Abrir uma pasta para nosso projeto, chamada `io-local`;
  * Iniciar o nosso projeto Node.js usando o comando `npm init`;
  * Criar um arquivo chamado `readFileSync.js`;
  * Escrever o seguinte código dentro do arquivo:
    > io-local/readFileSync.js

    ~~~javascript
    const fs = require('fs');

    const nomeDoArquivo = 'meu-arquivo.txt';

    try {
      const data = fs.readFileSync(nomeDoArquivo, 'utf8');
      console.log(data);
    } catch (err) {
      console.error(`Erro ao ler o arquivo: ${err.path}`);
      console.log(err);
    }
    ~~~
  * Importar o módulo `fs` e criar uma variável chamada `nomeDoArquivo`, contendo o nome (fixo) do arquivo que vamos ler
  * Chamar o método `fs.readFileSync`.
  * Rodar o script com `node readFileSync.js`.

Gerou um erro? Isso aconteceu porque estamos tentando ler um arquivo que não existe!
Continue a leitura para descobrir como solucionar esse problema.

**1. Método `fs.readFileSync`:**

Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js. Por ser *síncrono*, ele espera a leitura do arquivo terminar para, só então, atribuir o resultado à constante `data`.

O método `readFileSync` recebe dois parâmetros:
* O nome do arquivo;
* Um parâmetro opcional que, quando é uma string, define o *encoding* que será utilizado durante a leitura do arquivo.
> Mas e se ocorrer um erro na leitura do arquivo?

> Com funções síncronas, como readFileSync, você deve tratar explicitamente os erros que puderem acontecer.

No código que você escreveu dentro do arquivo, anteriormente no passo a passo, usamos um bloco `try...catch` para capturar quaisquer erros que possam acontecer durante a leitura do arquivo e imprimimos uma mensagem para o usuário no terminal.
Agora vamos resolver o probleminha que estamos tendo ao tentar ler o arquivo!
> Nota: Antes de continuar, não se esqueça de criar um arquivo meu-arquivo.txt com algum conteúdo dentro!

Ao rodar o script `readFileSync.js` com o comando `node readFileSync.js`, você deverá ver o conteúdo do seu arquivo impresso no terminal.
> Se tivéssemos que ler vários arquivos ao mesmo tempo?

> Resposta: Para isso, utilizamos um método `assíncrono`.

------

#### Exemplo 02 - Lendo arquivos com métodos assíncronos: Callbacks:

O método fornecido pelo módulo `fs` para leitura *assíncrona* de arquivos é o `fs.readFile`. Na versão padrão do fs, a função readFile aceita um `callback`, *chamado quando a leitura do arquivo termina*.

Vamos criar um arquivo chamado `readFile.js` dentro da nossa pasta `io-local` e vê-lo em ação com o seguinte código:
> io-local/readFile.js

  ~~~javascript
  const fs = require('fs');

  const nomeDoArquivo = 'meu-arquivo.txt';

  fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
    if (err) {
      console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
      process.exit(1);
    }
    console.log(`Conteúdo do arquivo: ${data}`);
  });
  ~~~

**2. Método `fs.readFile`:**

Esse método também é responsável por ler arquivos e trazer seu conteúdo para dentro do Node.js.

Ele recebe três parâmetros:
  * O nome do arquivo;
  * Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
  * Uma `callback` que permite receber e manipular os dados lidos do arquivo.

  > Observação: A callback é uma função que recebe dois parâmetros: `err` e `data`. Caso ocorra um erro durante a leitura do arquivo, o parâmetro `err` virá preenchido com as informações referentes ao erro. Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo ocorreu sem problemas. Nesse caso, o segundo parâmetro, `data`, virá preenchido com o conteúdo do arquivo.

Agora, rode o comando node readFile.js, você deverá obter uma saída semelhante a esta:
  * Conteúdo do arquivo: *Meu texto! Meu texto! Meu texto! Meu texto!.*

O tipo de `encoding` que escolhemos é muito importante.
  * Se não for especificado, por padrão, o arquivo será lido como `raw buffer`, um formato muito útil quando estamos enviando dados através de requisições HTTP.
  * Entretanto, neste caso, queremos manipular o conteúdo do arquivo como uma `string`, então o certo é especificar o encoding.

Contudo, essa não é a única forma de usar o método `readFile`. O módulo `fs` possui um segundo modelo de API que, em vez de trabalhar com *callbacks*, retorna **`Promises`**.

------

#### Exemplo 03 - Lendo arquivos com métodos assíncronos: Promises:

**Método `('fs').promises`:**

Vamos ver como ficaria o código do nosso exemplo anterior, agora utilizando `Promises`:
> io-local/readFile-promises.js

  ~~~javascript
  const fs = require('fs').promises;

  const nomeDoArquivo = 'meu-arquivo.txt';

  fs.readFile(nomeDoArquivo, 'utf8')
    .then((data) => {
      console.log(`Conteúdo do arquivo: ${data}`);
    })
    .catch((err) => {
      console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
      process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
    });
  ~~~

------

#### Exemplo 04 - Escrevendo dados em arquivos:

Escrever dados em arquivos é um processo bem parecido com a leitura de dados!
Assim como o módulo `('fs').promises` disponibiliza o método `readFile` para a *leitura*, há também o método `writeFile` para a *escrita*.
> Observação: O módulo fs também disponibiliza um método `writeFile`, que funciona utilizando `callbacks`. Vamos utilizar diretamente o módulo `('fs').promises`, já que o uso de Promises é bem mais encorajado que o uso de callbacks 👍

> io-local/writeFile.js

~~~javascript
const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu textão')
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });
~~~
> Rode o script com `node writeFile.js`. Repare que o conteúdo do `meu-arquivo.txt` foi alterado para "*Meu textão*".

------

#### Exemplo 05 - Utilizando async/await:

Muitas vezes, queremos somente buscar o resultado sem necessariamente usar uma API de Promises. Para isso contamos com `async`/`await`. Essas duas palavras-chave foram criadas para trabalhar com *Promises* como se estivéssemos no método *síncrono*.

Toda função na qual utilizamos *async*, automaticamente passa a retornar uma *Promise*, que será *rejeitada em caso de erro*, e *resolvida em caso de sucesso*.

Quando usamos *`async`/`await`* temos como resultado um código com sintaxe quase idêntica à utilizada para código síncrono.

Veja como fica o exemplo anterior que usamos para entender *Promise*, só que agora utilizando *`async`/`await`*:
> io-local/asyncawait.js
  ~~~javascript
  const fs = require('fs').promises;

  async function main() {
    try {
      await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
      console.log('Arquivo escrito com sucesso!');
    } catch (err) {
      console.error(`Erro ao escrever o arquivo: ${err.message}`);
    }
  }

  main()
  ~~~
Note que para podermos utilizar o *`async`/`await`*, precisamos criar uma função `main` e colocar nossa lógica dentro dela:
* Isso acontece porque, por enquanto, o `await` só pode ser utilizado dentro de funções `async`.
* Perceba também que não temos mais nenhum `.then` e que todo o tratamento de erro e sucesso foi feito com um `try`/`catch`. Do mesmo modo que fizemos quando estávamos utilizando o `fs.readFileSync`.

------

#### Exemplo 06 - Rodando promessas simultaneamente com `Promise.all`:

O `Promise.all` é um método da Promise que nos permite passar um *array de Promises* e receber de volta *uma única Promise*.

Ela será resolvida com todos os resultados das outras Promises assim que as demais já tenham também sido resolvidas.

Esse método também nos permite utilizar um *único `catch`*, que será chamado caso qualquer uma das Promises seja rejeitada.

Suponha que no código que vimos anteriormente, todos os arquivos serão lidos ao mesmo tempo e, portanto, não teremos uma forma de saber quando cada um vai terminar de ser lido.
> Mas e se precisarmos do resultado da leitura dos três arquivos?

> *Resposta: `Promise.all`!*

Vamos reescrever quase o mesmo código que vimos em *Promise*, evitando assim um *callback hell*.
  * Desta vez, vamos escrever no final a soma do tamanho de todos os arquivos.
  * Além disso, utilizar o módulo `('fs').promises` para usarmos os métodos já com a implementação de promises internamente, dispensando assim o tratamento das callbacks.

  ~~~javascript
  const fs = require('fs').promises;

  Promise.all([
    fs.readFile('file1.txt'),
    fs.readFile('file2.txt'),
    fs.readFile('file3.txt'),
  ])
    .then(([file1, file2, file3]) => {
      const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
      console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
    })
    .catch((err) => {
      console.error(`Erro ao ler arquivos: ${err.message}`);
    });
  ~~~

Pronto! Agora, estamos lendo os três arquivos ao mesmo tempo, e nosso .then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises.


------

#### Exemplo 07 - Atributos adicionais na utilização de métodos de leitura e escrita no `fs`:
No `writeFile`, assim como ocorre no `readFile`, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional em seus métodos.
* A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita.

> Observação: Se o arquivo não existir, ele é criado. Caso contrário, é reescrito, ou seja, tem seu conteúdo apagado antes de o novo conteúdo ser escrito. A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista:

  ~~~javascript
  const fs = require('fs').promises;

  // > A flag ``´wx`` abre o arquivo para escrita **apenas** caso ele não exista. Caso o contrário, um erro será lançado:

  fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' })
    .then(() => {
      console.log('Arquivo salvo');
    })
    .catch((err) => {
      // Se o arquivo existir, um erro é retornado
      console.error(err);
    });
  ~~~

Note que quando rodamos o código com a flag `wx`, tentando escrever no arquivo `meu-arquivo.txt`, é gerado o seguinte erro:

  ~~~javascript
  [...]
  [Error: EEXIST: file already exists, open './meu-arquivo.txt'] {
    errno: -17,
    code: 'EEXIST',
    syscall: 'open',
    path: './meu-arquivo.txt'
  }
  ~~~

No código, mude o nome do arquivo para `meu-novo-arquivo.txt` e rode novamente o script com `node writeFileSync.js`. Repare que foi criado um novo arquivo com o nome que utilizamos e com o conteúdo: Eu estive aqui :eyes:.
