const { expect } = require("chai");
const sinon = require("sinon");

const connection = require('../../../db')
const salesModel = require('../../../models/salesModel')

describe('Endpoint "/sales" para listar todas as vendas cadastradas no banco de dados', async () => {
  before(async () => {
    const execute = [
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:29.000Z",
        "productId": 1,
        "quantity": 2
      },
      {
        "saleId": 1,
        "date": "2021-09-09T04:54:54.000Z",
        "productId": 2,
        "quantity": 2
      }
    ];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  it('Quando retorna com sucesso a lista de vendas', async () => {
    const response = await salesModel.getAll();
    // const resposta = response[0];


    // console.log('=========================')
    // console.log('response', response, typeof response);
    // console.log('resposta', resposta, typeof resposta);
    // console.log('notFound', notFound, typeof notFound);

    expect(response).to.be.a('object');
  });
});

describe('Endpoint "/sales/:id" para buscar com sucesso uma venda através do seu id no banco de dados ', () => {
  before(async () => {
    const execute = [
      { "date": "2021-09-09T04:54:29.000Z", "productId": 1, "quantity": 2 },
      { "date": "2021-09-09T04:54:54.000Z", "productId": 2, "quantity": 2 }
    ];

    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });
  const id = 1;

  it('Quando retorna com sucesso a venda na busca pelo id', async () => {
    const response = await salesModel.getById(id);
    // const resposta = response[0];

    // console.log('=========================')
    // console.log('response', response, typeof response);
    // console.log('resposta', resposta, typeof resposta);

    expect(response).to.be.a('object');
    expect(response).to.have.a.property('productId');
  });
});

describe('Deleta uma venda através de um id no endpoint "/sales/:id"', () => {
  before(async () => {
    const execute = [];
    sinon.stub(connection, 'execute').resolves(execute);
  })

  after(async () => {
    connection.execute.restore();
  });

  const notFound = [];

  it('deleta o produto', async () => {
    const id = 3333333333333;
    const response = await salesModel.deleteSale(id);

    expect(response).to.be.a('array');
  });
});

