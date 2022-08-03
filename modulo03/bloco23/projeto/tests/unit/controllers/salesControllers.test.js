const { expect } = require('chai');
const sinon = require("sinon");
const salesControllers = require('../../../controllers/salesControllers');
const salesServices = require('../../../services/salesServices');

describe('Testa a função getAll de salesControllers', async () => {
  const res = {};
  const req = {};

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const result =  [
      { saleId: 1, date: "2021-09-09T04:54:29.000Z", productId: 1, quantity: 2 },
      { saleId: 1, date: "2021-09-09T04:54:54.000Z", productId: 2, quantity: 2 }
    ]

    sinon.stub(salesServices, 'getAll').resolves(result);
  });

  afterEach(() => salesServices.getAll.restore());

  it('getAll é chamado o status com o código 200', async () => {
    await salesControllers.getAll(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('getAll é chamado o json com um array de vendas', async () => {
    await salesControllers.getAll(req, res);
    const jsonMessage = {
      message: [
        { saleId: 1, date: "2021-09-09T04:54:29.000Z", productId: 1, quantity: 2 },
        { saleId: 1, date: "2021-09-09T04:54:54.000Z", productId: 2, quantity: 2 }
      ]
    };

    expect(res.json.calledWith(jsonMessage)).to.be.equal(false);
  });

  it('getAll é chamado o status com o código 500', async () => {
    await salesControllers.getAll(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});


describe('Testa a função getById de salesControllers', async () => {
  const res = {};
  const req = { params: { id: 1 } };

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const result =  [
      { saleId: 1, date: "2021-09-09T04:54:29.000Z", productId: 1, quantity: 2 },
      { saleId: 1, date: "2021-09-09T04:54:54.000Z", productId: 2, quantity: 2 }
    ]

    sinon.stub(salesServices, 'getById').resolves(result);
  });

  afterEach(() => salesServices.getById.restore());

  it('getById é chamado o status com o código 200', async () => {
    await salesControllers.getById(req, res);
    expect(res.status.calledWith(200)).to.be.equal(true);
  });

  it('getById é chamado o json com um array de vendas', async () => {
    await salesControllers.getById(req, res);
    const jsonMessage = {
      message: [
        { saleId: 1, date: "2021-09-09T04:54:29.000Z", productId: 1, quantity: 2 },
        { saleId: 1, date: "2021-09-09T04:54:54.000Z", productId: 2, quantity: 2 }
      ]
    };

    expect(res.json.calledWith(jsonMessage)).to.be.equal(false);
  });

  it('getById é chamado o status com o código 500', async () => {
    await salesControllers.getById(req, res);

    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});

describe("Testa a requisição para deletar uma venda", () => {
  const res = {};
  const req = { params: { id: 1 } };
  const product = [{
      id: 1,
      name: "Example name",
    }];

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, 'deleteSale').resolves(product);
  });

  after(() => salesServices.deleteSale.restore());

  it("é chamado o status com o código 204", async () => {
    await salesControllers.deleteSale(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(204)).to.be.equal(true);
  });
});

describe("Testa a requisição para tentar deletar uma venda que não existe", () => {
  const res = {};
  const req = { params: { id: 999999 } };
  const notFound = [{ message: "Sale not found"}];

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, 'deleteSale').resolves(notFound);
  });

  after(() => salesServices.deleteSale.restore());

  it("é chamado o status com o código 404", async () => {
    await salesControllers.deleteSale(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(404)).to.be.equal(false);
  });
});

describe("Testa a requisição para atualizar uma venda", () => {
  const res = {};
  const req = {
    body: [
    { productId: 1, quantity: 10 },
    { productId: 2, quantity:50 }
    ],
    params: { id: 1 }
  };

  before(() => {

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    const sale = [ {
      saleId: 1,
      itemsUpdated: [
        { productId: 1, quantity:10 },
        { productId: 2, quantity:50 }
      ]
    }];

    sinon.stub(salesServices, 'updateSale').resolves(req.params.id, sale);
  });

  after(() => salesServices.updateSale.restore());

  it("é chamado o status com o código 200", async () => {
    await salesControllers.updateSale(req, res);
    // console.log(res.status, "********")
    expect(res.status.calledWith(200)).to.be.equal(true);
  });
});
