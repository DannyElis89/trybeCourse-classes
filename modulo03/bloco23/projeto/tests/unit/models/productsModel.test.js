const { expect } = require("chai");
const sinon = require("sinon");

const connection = require('../../../db')
const productsModel = require('../../../models/productsModel')

describe('Endpoint "/products" para listar todos os produtos cadastrados no banco de dados', async () => {
  before(async () => {
    const execute = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' }
    ];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  it('Quando retorna com sucesso a lista de objetos', async () => {
    const response = await productsModel.getAll();
    const resposta = response[0];

    // console.log('===================')
    // console.log('productsModel')
    // console.log(resposta, typeof resposta)

    expect(resposta).to.be.a('object');
  })

})

describe('Endpoint "/products/:id" para buscar com sucesso um produto através do seu id no banco de dados ', () => {
  before(async () => {
    const execute = [{ id: 1, name: 'Martelo de Thor' }];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });
  const id = 1;

  it('Quando retorna com sucesso o objeto na busca pelo id', async () => {
    const response = await productsModel.getById(id);
    const resposta = response[0];
    expect(resposta).to.be.a('object');
    expect(resposta).to.have.a.property('id');
  });
});

describe('Endpoint "/products/:id" para buscar um produto inexistente no banco de dados ', () => {
  before(async () => {
    const execute = [];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  it('Quando a busca é feita com um id inexistente', async () => {
    const id = 3333333333333;
    const response = await productsModel.getById(id);

    // const resposta = response[0];

    // console.log('=========================')
    // console.log('response', response, typeof response);
    // // console.log('resposta', resposta, typeof resposta);
    // console.log('notFound', notFound, typeof notFound);

    expect(response).to.be.a('array');
  });
});

describe('Testa o cadastro de novos produtos através do endpoint "/products"', async () => {
  before(async () => {
    const execute = [{
      "id": 4,
      "name": "ProdutoX"
    }];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  it('Cadastrando um produto corretamente', async () => {
    const name = 'ProdutoX';
    const response = await productsModel.add(name);
    expect(response).to.be.a('object');
  });
});

describe('Deleta um produto através de um id no endpoint "/products/:id"', () => {
  before(async () => {
    const execute = [];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  it('deleta o produto', async () => {
    const id = 3333333333333;
    const response = await productsModel.deleteProduct(id);


    expect(response).to.be.a('array');
  });
});
