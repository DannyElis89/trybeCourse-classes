const { expect } = require('chai');
const sinon = require("sinon");

const connection = require('../../../db');
const productsService = require('../../../services/productsServices');
const productsModel = require('../../../models/productsModel');

describe('Lista todos os produtos do banco de dados no entrepoint "/products"', () => {
  before(() => {
    const productsList = [
      { id: 1, name: 'Martelo de Thor' },
      { id: 2, name: 'Traje de encolhimento' },
      { id: 3, name: 'Escudo do Capitão América' }
    ];
    sinon.stub(productsModel, 'getAll').resolves(productsList);
  });

  after(() => productsModel.getAll.restore() );

  it('Retorna uma lista de produtos', async () => {
    const response = await productsService.getAll();

    // console.log('===================');
    // console.log('productsServices');
    // console.log(response, typeof response);s

    expect(response).to.be.a('array');
  });
});

describe('Busca no banco de dados um produto pelo id no entrepoint "/products/:id"', () => {
  before(() => {
    const product = [
      { id: 1, name: 'Martelo de Thor' }
    ];
    sinon.stub(productsModel, 'getById').resolves(product);
  });

  after(() => productsModel.getById.restore());

  it('Retorna um produto pelo seu id', async () => {
    const response = await productsService.getById(1);

    // console.log('===================');
    // console.log('productsServices');
    // console.log(response, typeof response);

    expect(response).to.be.a('array');
    expect(response[0]).to.have.a.property('id');
    expect(response[0]).to.have.a.property('name');
  });
});

describe('Adiciona um produto no banco de dados no entrepoint "/products"', () => {
  before(() => {
    const product = [
      { id: 4, name: 'ProdutoX' }
    ];
    sinon.stub(productsModel, 'add').resolves(product);
  });

  after(() => productsModel.add.restore());

  it('Adiciona um novo produto', async () => {
    const name = 'ProdutoX';
    const response = await productsService.add(name);

    // console.log('===================');
    // console.log('productsServices');
    // console.log(response, typeof response);

    expect(response).to.be.a('array');
    expect(response[0]).to.have.a.property('id');
    expect(response[0]).to.have.a.property('name');
  });
});

describe('Deleta um produto do banco de dados no entrepoint "/products/:id"', () => {
  before(() => {
    const product = [
      { id: 4, name: 'ProdutoX' }
    ];
    sinon.stub(productsModel, 'deleteProduct').resolves(product);
  });

  after(() => productsModel.deleteProduct.restore());

  it('Adiciona um novo produto', async () => {
    const response = await productsService.deleteProduct(1);

    // console.log('===================');
    // console.log('productsServices.test');
    // console.log(response, typeof response);

    expect(response).to.be.a('array');
    expect(response[0]).to.have.a.property('id');
    expect(response[0]).to.have.a.property('name');
  });
});
