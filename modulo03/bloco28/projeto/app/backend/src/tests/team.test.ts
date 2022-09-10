import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/team';
import ITeam from '../interfaces/ITeam';


chai.use(chaiHttp);

const { expect } = chai;

const mListTeams: ITeam[] = [
  {
    "id": 1,
    "teamName": "Avaí/Kindermann"
  },
  {
    "id": 2,
    "teamName": "Bahia"
  }
]

const mTeam: ITeam = {
  "id": 1,
  "teamName": "Avaí/Kindermann"
}

describe('Teste Team', () => {
  it('Retorna uma lista de times e status 200', async() => {
    sinon.stub(Team, 'findAll').resolves(mListTeams as Team[]);

    const response = await chai.request(app)
    .get('/teams');
    const { status } = response;

    expect(status).to.equal(200);

    sinon.restore();
  });

  it('Retorna um time e status 200', async() => {
    sinon.stub(Team, 'findOne').resolves(mTeam as Team);

    const response = await chai.request(app)
    .get('/teams/1');

    const { status } = response;

    expect(status).to.equal(200);

    sinon.restore();
  });

  it('Retorna "Not Found" e status 400 caso não encontre o time pelo id', async () => {
    sinon.stub(Team, 'findOne').resolves();

    const response = await chai.request(app)
    .get('/teams/100');
    const { status, body } = response;

    expect(status).to.equal(400);
    expect(body).to.have.property('message');
    expect(body.message).to.equal('Not Found');

    sinon.restore();
  });
})
