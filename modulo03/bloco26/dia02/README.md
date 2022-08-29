# Bloco 26: Typescript
## Dia 02: Tipagem Estática e Generics
### Conteúdos aboraddos:
* Tipos de coleção
* Type Aliases
* Classes
* Interfaces
* Generics
* Model com MySQL
* Bônus: Model com Sequelize

-------------

### Tipos de coleção:

<details>

* Arrays:
  * Conjunto de valores do mesmo tipo;
  * Declaração: `let arrayName: type[] = [...];`;
  * Ex:
    ~~~typescript
    let names: string[] = ["Mary Joe", "Alan Joe"];
    ~~~

* Tuplas:
  * Conjunto de valores cuja ordem e tipo dos valores são fixas;
  * Declaração: `let variableName: [type, type, ...]`;
  * Ex:
    ~~~typescript
    let fullName: [string, string] = ["Jane", "Doe"];
    let person: [string, number] = ["Jane Doe", 35];
    let car: [string, string, number] = ["Ford", "F400", 10];
    ~~~

* *Type Aliases*:
  * Utilizados para declarar a forma de um objeto nomeando o tipo, permitindo usar o mesmo tipo mais de uma vez.
  * Ex 1:
    ~~~typescript
    type Point = {
      x: number;
      y: number;
    };


    function printCoord(pt: Point) {
      console.log("O valor da cordenada x é: " + pt.x);
      console.log("O valor da coordenada y é: " + pt.y);
    }

    printCoord({ x: 100, y: 100 });
    //saída:
    //O valor da cordenada x é: 100
    //O valor da cordenada y é: 100
    ~~~

  * Ex 2: Crie um type para um objeto que represente um pássaro:
    ~~~typescript
    type passaro = {
      asas: 2,
      bico: 1,
      patas: 2,
    }
    ~~~

  * Ex 3: Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles:
    ~~~typescript
    type soma = (x: number, y: number) => number;
    ~~~

  * Ex 4: Crie um type para um objeto que represente um endereço:
    ~~~typescript
    type address = {
      rua: string,
      numero: number,
      bairro: string,
      cidade: string,
      estado: string,
      pais: string,
    };
    ~~~

* *Type Unions*:
  * Forma de declarar que um objeto é um tipo formado a partir de dois ou mais outros tipos, representando valores que podem ser qualquer um desses tipos:
    ~~~typescript
    // A função abaixo pode receber tanto um número
    // quanto uma string.
    function retornarCPF(cpf: number | string){
      console.log("Seu CPF é: " + cpf);
    }
    ~~~

  * Ex 1: Crie um type union que represente os estados físicos da matéria: líquido, sólido ou gasoso:
    ~~~typescript
    type StatesOfMatter = "liquid" | "solid" | "gaseous";
    ~~~

  * Ex 2: Crie um type union que represente o documento identificador de uma pessoa que pode receber valores numéricos ou texto. *Ex: “123.567.890-12” ou 123456789012*:
    ~~~typescript
    type rg = string | number;
    ~~~

  * Ex 3: Crie um type union que represente sistemas operacionais: linux, mac os ou windows:
    ~~~typescript
    type OpSystem = "linux" | "Mac OS" | "Windows";
    ~~~

  * Ex 4: Crie um type union que represente sistemas operacionais: linux, mac os ou windows:
    ~~~typescript
    type vogais = "a" | "e" | "i" | "o" | "u";
    ~~~

</details>

-------------

### Classes:

<details>

* Maneira de atribuir a forma de um objeto.
* Uma classe `Person` descreve os atributos de uma pessoa, por exemplo: `nome`, `data de nascimento` e `cor dos olhos`. Ela também descreve ações que uma pessoa pode executar, como `falar`, `comer` ou `andar`.
  * Mas a classe *Person* é apenas um plano para a criação de uma pessoa. Você deve criar uma *instância* de pessoa da classe *Person* antes que ela se torne um objeto ao qual você possa atribuir valores de propriedade (como definir a cor dos olhos como azul) ou chamar suas ações (como falar).

    ~~~typescript
    enum EyeColor {
        Black = "Pretos",
        Blue = "Azuis",
        Green = "Verdes",
        Brown = "Castanhos",
    }

    class Person {
        name: string;
        birthDate: Date;
        eyeColor?: EyeColor; // na cor dos olhos usamos uma Enum com valores pré definidos
        // o caractere '?' sinaliza que aquele campo não é obrigatório na classe o que faz com seu tipo seja um union type entre o tipo original e undefined

        constructor(name: string, birthDate: Date, eyeColor: EyeColor) {
            this.name  = name;
            this.birthDate  = birthDate;
            this.eyeColor  = eyeColor;
        }

        speak(): void {
            console.log(`${this.name} está falando.`);
        }

        eat(): void {
            console.log(`${this.name} está comendo.`)
        }

        walk(): void {
            console.log(`${this.name} está andando.`)
        }
    }
    ~~~

  * A classe *Person* pode ser reutilizada para criar qualquer quantidade de novos objetos *Person*, cada um com suas próprias características.

    ~~~typescript
    const person1 = new Person("Jane Doe", new Date("1986-01-01"), EyeColor.Brown);
    const person2 = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

    console.log(person1);
    person1.speak()

    // saída:
    // Person: {
    //   "name": "Jane Doe",
    //   "birthDate": "1986-01-01T00:00:00.000Z",
    //   "eyeColor": "Castanhos"
    // }
    // "Jane Doe está falando."

    console.log(person2);
    person2.walk();

    // saída:
    // Person: {
    //   "name": "Jon Doe",
    //   "birthDate": "1980-08-05T00:00:00.000Z",
    //   "eyeColor": "Pretos"
    // }
    // "Jon Doe está andando."
    ~~~

</details>


-------------

### Interfaces:

<details open>

* Utilizada para declarar a forma de um objeto, nomear e parametrizar os tipos do objeto e compor tipos de objetos nomeados existentes em novos.
* São uma forma eficiente de definir um "contrato de código", ou seja, aquilo que você espera que seja implementado dentro do seu código.
* Uma interface **não inicializa nem implementa** as propriedades declaradas dentro dela, porque o único trabalho de uma interface é **descrever o objeto**.
* Exemplos:
  * Ex 1: Crie uma interface cujo objeto represente um Automóvel:
    ~~~typescript
    interface Automobile {
      name: string;
      brand: string;
      color: string;
      doors: number;
      gears: number;
      turnOn: () => void;
      turnOff: () => void;
      speedUp: () => void;
      speedDown: () => void;
      break: () => void;
    }
    ~~~

  * Ex 2: Crie uma interface cujo objeto represente um Felino:
    ~~~typescript
    interface Feline {
      name: string;
      age: string;
      genre: string;
      subfamilia: string;
      walk: () => void;
      hunt: () => void;
      eat: () => void;
      sleep: () => void;
      drink: () => void;
    }
    ~~~

</details>

-------------

### *Generics*:

<details open>

* Modelo de código que pode ser reutilizado;
* Forma de informar funções, classes ou interfaces;
* Reduz o uso do *any*;
* Definem uma ou mais variáveis de tipo para identificar o tipo ou tipos que serão passados para o componente, colocados entre colchetes angulares (`< >`). T é um nome comumente usado para um *generic*, mas você pode nomeá-lo como desejar.
* Ex:
    ~~~typescript
    function getArray<T>(items : T[]) : T[] {
        return new Array<T>().concat(items);
    }

    let numberArray = getArray<number>([5, 10, 15, 20]);
    numberArray.push(25);
    numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

    let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
    stringArray.push("Rabbits");
    stringArray.push(30); // Isto vai gerar um erro de compilação

    // GENERICS EM INTERFACES
    interface ProcessIdentity<T, U> {
        (value: T, message: U): T;
    }

    function processIdentity<T, U> (value: T, message: U) : T {
        console.log(message);
        return value
    }

    let processor: ProcessIdentity<number, string> = processIdentity;
    let returnNumber = processor(100, "Olá");
    let returnString = processor("Olá", 100); // Type check error: Argument of type "string" is not assignable to parameter of type "number".

    // GENERICS EM CLASSES
    class ProcessIdentity<T, U> {
    _value: T;
    _message: U;

    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }

    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
    }

    let processor = new ProcessIdentity<number, string>(100, "Olá");
    processor.getIdentity();  // imprime "Olá" e retorna 100
    ~~~

    <details>

    ![Esquema de uso do Generics](https://assets.app.betrybe.com/back-end/typescript/images/generics-ba8ad84c9d7327a4d28fdb297df76d80.png)

    </details>



</details>

<!-- ~~~typescript

~~~ -->
