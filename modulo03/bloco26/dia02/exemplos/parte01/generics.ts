type LingProg = {
  nome: string;
}

function ling_prog <T> (value: T): T {
  return value;
}

const result = ling_prog<LingProg> ({ nome: "TS"});
console.log(result);

// -------------

function getArray<T>(items: T[]) : T[] {
  return new Array<T>().concat(items);
}

let numArray = getArray<number>([100, 200, 300]);
let stringArray = getArray<string>(["100", "200", "300"]);

numArray.push(200);
stringArray.push("200");

// ----------------

function displayType<T, U>(id: T, name: U): void {
  console.log(typeof(id) + ", " + typeof(name));
}

displayType<number, string>(1, "danny");
