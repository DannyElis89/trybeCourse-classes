# Bloco 26: Typescript
## Dia 01: Introdução ao TypeScript

### Conteúdos abordados:

<details>

* Introdução (O que é TypeScript?)
* Tipagem (dicas de tipo)
* Diferença entre Compilador e Transpilador
* TSC - TypeScript Compiler
* Introdução ao TSConfig
* TypeScript Playground
* Tipos e Subtipos
* Enum ou enumeração
* Primeiro programa em TypeScript

</details>

--------------------------

### Tipagem (dicas de tipo):

<details>

* **TypeScript é uma linguagem fortemente tipada e estaticamente tipada que possui inferência de tipo.**
* **Tipagem Estática:**
  * Não permite que a pessoa desenvolvedora altere o tipo após ele ser declarado;
  * Geralmente a verificação de tipo é feita em tempo de compilação.

* **Tipagem dinâmica:**
  * Não ocorre no Typescript;
  * A linguagem de programação “escolhe" o tipo de dado a partir do valor atribuído à variável em tempo de execução;

* **Tipagem forte:**
  * Ocorre no Typescript;
  * Linguagens fortemente tipadas não realizam conversões automaticamente.
  * Não é possível realizar operações entre valores de diferentes tipos, sendo necessário que a pessoa desenvolvedora faça a conversão para um dos tipos, caso seja possível.

* **Tipagem fraca:**
  * Não ocorre no Typescript;
  * A linguagem consegue realizar conversões automáticas entre tipos diferentes de dados;

* **Inferência de tipo:**
  * Algumas linguagens com tipagem estática podem fazer a inferência de tipo na declaração de variáveis, mas sem permitir que o tipo seja alterado após a declaração.

</details>

--------------------------

### Diferença entre Compilador e Transpilador

<details>

* **Compilador:**
  * Programa que traduz o código desenvolvido usando uma linguagem de mais alto nível (mais próxima dos seres humanos) em um código de um programa equivalente de uma linguagem de mais baixo nível (mais próxima do processador).

* **Transpilador:**
  * Programa de sistema que traduz o código desenvolvido utilizando uma linguagem de mais alto nível em um código de um programa equivalente de uma outra linguagem de mais alto nível ou em uma versão diferente da mesma linguagem.
  * Pode ser considerado um tipo de compilador que atua em um nível mais alto de abstração;

<details>

![Imagem que demonstra a diferença entre compilador e transpilador](https://assets.app.betrybe.com/back-end/typescript/introduction/images/transpilador-d2c0be81488c129b00e8adc327c66bb3.png)

</details>

</details>

--------------------------

### TSC (TypeScript Compiler):

<details>

* Compilador do Typescript;
* *Traduz* o Typescript para Javascript;
* Responsável por realizar a verificação de tipo no código TypeScript;

* Instalação e execução do TSC:
  * Instalação global:
    * `npm install -g typescript`;

  * Execução:
    * `tsc nomeDoArquivo.ts`;
    * `npx tsc nomeDoArquivo.ts`;

  * Após a execução do arquivo, o compilador fará uma verificação de tipo no arquivo:
    * Se nenhum problema for encontrado, um novo arquivo será criado com o nome `nomeDoArquivo.js`, contendo o código compilado para JavaScript. A seguir, podemos rodar o arquivo .js gerado utilizando o Node:
      * `node nomeDoArquivo.js`;

    * Caso haja erro, o compilador apontará uma mensagem de erro no terminal e o arquivo `.js` não será gerado.

</details>

--------------------------

### Introdução ao TSConfig:

<details>

* Arquivo de configuração Typescript: `tsconfig.json`;
  * Possui variáveis de configuração que definirão como o código será compilado;
  * Deve ser instalado como uma *DevDependency* no projeto (`npm i -D typescript`) e utilizá-lo através do `npx`:
    * *Isso garante que todas as pessoas desenvolvedoras do projeto utilizem a mesma versão do TypeScript.*

* Gerar o *TSConfig*:
  * Caso tenha o TSC instalado globalmente na máquina: `tsc --init`;
  * Caso queira utilizar o TSC como um executável npx: `npx tsc --init`;

* Arquivo *tsconfig.json*:
  * `module:` especifica o sistema de módulo a ser utilizado no código JavaScript que será gerado pelo compilador como sendo o *CommonJS*;
  * `target:` define a versão do JavaScript do código compilado como *ES6*;
  * `rootDir:` define a localização raiz dos arquivos do projeto;
  * `outDir:` define a pasta onde ficará nosso código compilado;
  * `esModuleInterop:` habilitamos essa opção para ser possível compilar módulos *ES6* para módulos *CommonJS*;
  * `strict:` habilitamos essa opção para ativar a verificação estrita de tipo;
  * `include:` essa chave vai depois do objeto *CompilerOptions* e com ela conseguimos incluir na compilação os arquivos ou diretórios mencionados; e
  * `exclude:` essa chave também vai depois do objeto *CompilerOptions* e com ela conseguimos excluir da compilação os arquivos mencionados.

* Configuração base para o ambiente JS (versão do NodeJS):
  * *Não existe uma versão base para todos os ambientes JavaScript, apenas para os mais recentes.*
  * *Com node, é possível utilizar a partir da versão 12.*
  * *Por exemplo, se estivermos desenvolvendo um projeto que usará a versão 16 do Node, podemos utilizar o módulo base @tsconfig/node16:* `npm i -D @tsconfig/node16`;

</details>

--------------------------

### Tipos e Subtipos:

<details>

* Em TypeScript, todos os tipos são subtipos de um tipo principal chamado `any`, e este é um tipo que pode representar qualquer valor em JavaScript.
* Os demais tipos são os tipos `primitivos`, tipos de `objeto` ou `parâmetros de tipo`.

<details>

![Imagem que demonstra a divisão de tipos na linguagem TypeScript](https://assets.app.betrybe.com/back-end/typescript/introduction/images/types-668e257ccb9fac7d7f5f7ab3b13fdcf3.png)

</details>

* Tipos primitivos:
  * `boolean`: recebe verdadeiro (*true*) ou falso (*false*):
    ~~~typescript
    let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
    let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false
    ~~~

  * `number`: recebe valores numéricos e, assim como no JavaScript, todos são valores de ponto flutuante:
    ~~~typescript
    // cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
    // isso não funciona com const
    let x: number;

    let y: number = 0;
    let z: number = 123.456;
    ~~~

  * `string`: recebe uma sequência de caracteres armazenados como unidades de código *UTF-16 Unicode*:
    ~~~typescript
    let s: string;
    let empty: string = "";
    let abc: string = 'abc';
    ~~~

  * `void`: existe apenas para indicar a **ausência de um valor**, como em uma função sem valor retornado:
    ~~~typescript
    function sayHelloWorld(): void {
      console.log("Hello World!");
    }
    ~~~

  * `null` e `undefined`: são subtipos de todos os outros tipos:
    ~~~typescript
    let nullValue = null;
    let undefinedValue = undefined;
    ~~~

* Declaração de variáveis com inferência de tipos:
  * Declarar uma variável sem explicitar o tipo e o compilador fará a inferência por meio do valor definido;

    ~~~typescript
    let flag = true; // o compilador irá inferir o tipo boolean
    const numberPI = 3.1416; // o compilador irá inferir o tipo number
    let message = "Hello World!"; // o compilador irá inferir o tipo string
    ~~~

</details>

--------------------------

### Enum ou enumeração:

<details>

* `enum` é um nome simbólico para um conjunto de valores relacionados;
* Utilizado para criar um conjunto de constantes para uso com variáveis e propriedades, úteis quando temos um conjunto de valores que determinado tipo de variável pode assumir.
* Exemplo:
  * Imagine que você tem um campo em um banco de dados externo que representa o status da matrícula de uma pessoa estudante em um curso, chamado `StudentStatus`, que é do tipo *inteiro* e pode conter os números `1`, `2` ou `3`, que representam respectivamente: `Active`, `Inactive` e `Paused`.
  * Vamos criar uma enumeração com esses valores e entendermos como eles funcionam no TypeScript:
    ~~~typescript
    enum StudentStatus {
        Active = 1,
        Inactive,
        Paused
    }
    ~~~

  * Agora, vamos declarar uma variável para uma nova pessoa estudante do tipo `StudentStatus` e atribuir o tipo `Inactive`:
    ~~~typescript
    let newStudentStatus: StudentStatus = StudentStatus.Inactive; // referenciamos um enum usando EnumName.Value
    console.log(newStudentStatus); //saída: 1
    ~~~

</details>
