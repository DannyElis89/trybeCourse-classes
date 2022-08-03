const { expect } = require('chai');
const sinon = require("sinon");
const productsControllers = require('../../../controllers/productsControllers');
const productsService = require('../../../services/productsServices');

describe('Testa a função getProducts de productsControllers', async () => {
  const res = {};
  const req = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves(false);
  });

  afterEach(() => productsService.getAll.restore());

  it('getProducts é chamado o status com o código 200', async () => {
    await productsControllers.getProducts(req, res);

    expect(res.status.calledWith(200)).to.be.equal(false);
  });

  it('é chamado o json com a mensagem "Dados inválidos"', async () => {
    await productsControllers.getProducts(req, res);
    const jsonMessage = {
      message: [
        { "id": 1, "name": "Martelo de Thor" },
        { "id": 2, "name": "Traje de encolhimento" }
      ]
    }

    expect(res.json.calledWith(jsonMessage)).to.be.equal(false);
  });

  it('getProducts é chamado o status com o código 500', async () => {
    await productsControllers.getProducts(req, res);

    expect(res.status.calledWith(500)).to.be.equal(true);
  });
});

describe("quando retorna os produtos pelo id", () => {
  const res = {};
  const req = { params: { id: 1 } };
  const product = [{
      id: 1,
      name: "Example name",
    }];

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves(product);
  });

  after(() => productsService.getById.restore());

  it("é chamado o status com o código 200", async () => {
    await productsControllers.getProductById(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe("Testa a requisição para postar um novo produto", () => {
  const res = {};
  const req = { body: { name: 'produtoX'}};
  const product = [{
      id: 4,
      name: "ProdutoX",
  }];

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'add').resolves(product);
  });

  after(() => productsService.add.restore());

  it("é chamado o status com o código 20a", async () => {
    await productsControllers.postProduct(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(201)).to.be.equal(true);
  });
});

describe("Testa a requisição para deletar um produto", () => {
  const res = {};
  const req = { params: { id: 1 } };
  const product = [{
      id: 1,
      name: "Example name",
    }];

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves(product);
  });

  after(() => productsService.deleteProduct.restore());

  it("é chamado o status com o código 204", async () => {
    await productsControllers.deleteProduct(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(204)).to.be.equal(true);
  });
});
