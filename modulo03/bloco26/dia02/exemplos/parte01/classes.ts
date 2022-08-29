interface Ifuncionario {
  _nome: string,
  _cpf: string | number,
  _dataNasc: Date,
  _status: boolean,
}

class Funcionario implements Ifuncionario {
  // Atributos... como essa classe implementa a interface Ifuncionario, os atributos devem ser os mesmos
  _nome: string;
  _cpf: string | number;
  _dataNasc: Date;
  _status: boolean;

  constructor(nome: string, cpf: string | number, dataNasc: Date, status: boolean){
    this._nome = nome;
    this._cpf = cpf;
    this._dataNasc = dataNasc;
    this._status = status;
  };

  // implementação de métodos:

  cadastrar(): void {
    console.log('Cadastrar');
  };

  imprimir(): void {
    console.log(`NOME: ${this._nome}`);
  }
}


// INSTANCIAÇÃO DA CLASSE:

const funcionario1 = new Funcionario('Danny', 11111111111, new Date('1989-05-28'), true);
console.log(funcionario1)
funcionario1.cadastrar();
funcionario1.imprimir();
console.log(funcionario1._cpf);
console.log(funcionario1._dataNasc);
console.log(funcionario1._nome);
console.log(funcionario1._status);
