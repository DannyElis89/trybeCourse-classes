// ARRAYS
let names: string[]= ["Mary Joe", "Alan Joe"];
const array: (number | string)[] = [];

// array de objeto
type myObj = {
  name: string,
  age?: number, // ? torna o conjunto chave-valor opcional.
}

const arrayObj: myObj[] = [
  {
    name: 'danny',
    age: 33,
  },
  {
    name: 'elis',
  }
]

// TUPLAS

let fullName: [string, string] = ["Jane", "Doe"];
let person: [string, number] = ["Jane Doe", 35];
let car: [string, string, number] = ["Ford", "F400", 10];

const address1: [string, number, string] = ["rua1", 10, "santa maria"];

// array de arrays com tipos definidos em cada posição
const address2: [string, number, string][] = [["rua1", 10, "santa maria"], ["rua2", 12, "santa maria"]];

// obriga que a segunda posição do array seja o num 5
const address3: [string, 5, string] = ["rua1", 5, "santa maria"];
const address4: typeof address1[] = [["rua1", 10, "santa maria"], ["rua2", 12, "santa maria"]];


// TYPE ALIASES
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
