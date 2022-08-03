const { expect } = require('chai');
const sinon = require("sinon");

const connection = require('../../../db');
const salesService = require('../../../services/salesServices');
const salesModel = require('../../../models/salesModel');

describe('Lista todas as vendas do banco de dados no entrepoint "/sales"', () => {
  before(() => {
    const salesList = [{
      "id": 3,
      "itemsSold": [
        { "productId": 1, "quantity":1 },
        { "productId": 2, "quantity":5 }
      ]
    }];
    sinon.stub(salesModel, 'getAll').resolves(salesList);
  });

  after(() => salesModel.getAll.restore() );

  it('Retorna uma lista com todas as vendas', async () => {
    const response = await salesService.getAll();
    const resposta = response[0];
    const itemsSold = resposta.itemsSold[0];

    // console.log('===================');
    // console.log('salesServices');
    // console.log('itemsSold', itemsSold, typeof itemsSold);

    expect(response).to.be.a('array');
    expect(resposta).to.be.a('object');
    expect(resposta).to.have.a.property('id');
    expect(resposta).to.have.a.property('itemsSold');
    expect(itemsSold).to.have.a.property('productId');
    expect(itemsSold).to.have.a.property('quantity');
  });
});

describe('Busca uma venda no banco de dados pelo id no entrepoint "/sales/:id"', () => {
  before(() => {
    const sale = [
      { "saleId": 1, "date": "2021-09-09T04:54:29.000Z", "productId": 1, "quantity": 2 },
      { "saleId": 1, "date": "2021-09-09T04:54:54.000Z", "productId": 2, "quantity": 2 }
    ];
    sinon.stub(salesModel, 'getById').resolves(sale);
  });

  after(() => salesModel.getById.restore());

  it('Retorna uma venda pelo seu id', async () => {
    const response = await salesService.getById(1);

    // console.log('===================');
    // console.log('salesServices');
    // console.log(response, typeof response, 'response[0]', response[0]);

    expect(response).to.be.a('array');
    expect(response[0]).to.have.a.property('saleId');
    expect(response[0]).to.have.a.property('date');
    expect(response[0]).to.have.a.property('productId');
    expect(response[0]).to.have.a.property('quantity');
  });
});

describe('Deleta uma venda do banco de dados no entrepoint "/sales/:id"', () => {
  before(() => {
    const sale = [ null ];
    sinon.stub(salesModel, 'deleteSale').resolves(sale);
  });

  after(() => salesModel.deleteSale.restore());

  it('Adiciona um novo produto', async () => {
    const response = await salesService.deleteSale(1);

    // console.log('===================');
    // console.log('salesServices.test');
    // console.log(response, typeof response);

    expect(response).to.be.a('array');
  });
});

describe('Atualiza as informações de uma venda', () => {
  before(() => {
    const sale = [ {
      saleId: 1,
      itemsUpdated: [
        { productId: 1, quantity:10 },
        { productId: 2, quantity:50 }
      ]
    }];

    sinon.stub(salesModel, 'updateSale').resolves(sale);
  });

  after(() => salesModel.updateSale.restore());

  it('Atualiza com sucesso as informações de uma venda', async () => {
    const id = 1;
    const sales = [
        { productId: 1, quantity: 10 },
        { productId: 2, quantity:50 }
      ];
    const response = await salesService.updateSale(id, sales);

    // console.log('===================');
    // console.log('salesServices.test');
    // console.log(response, typeof response);

    expect(response).to.be.a('object');
  })
})

describe('Tenta atualizar as informações de uma venda inexistente', () => {
  before(() => {
    const notFound = [ { message: "Product not found" }];

    sinon.stub(salesModel, 'updateSale').resolves(notFound);
  });

  after(() => salesModel.updateSale.restore());

  it('Atualiza com sucesso as informações de uma venda', async () => {
    const id = 13333333333;
    const sales = [
        { productId: 1, quantity: 10 },
        { productId: 2, quantity:50 }
      ];
    const response = await salesService.updateSale(id, sales);

    // console.log('===================');
    // console.log('salesServices.test');
    // console.log(response, typeof response);

    expect(response).to.be.a('object');
  })
})
