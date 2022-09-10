import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import Team from '../database/models/team';
import Matches from '../database/models/matches';
import HandleError from '../utils/handleError';
import JWT from '../utils/jwt';
import MatcherService from '../services/matcherService';
import { StatusCodes } from 'http-status-codes';
import IMatchers, { Create } from '../interfaces/IMatchers';

chai.use(chaiHttp);

const { expect } = chai;

const mListMatchers: IMatchers[] = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 3,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "teamHome": {
        "teamName": "São Paulo"
    },
    "teamAway": {
        "teamName": "Grêmio"
    }
  }
];

const mockMatchers: Create = {
  id: 49,
  homeTeam: 1,
  awayTeam: 1,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
};

describe('Teste Matchers', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('Retorna uma lista com todos os matchers e status 200', async () => {
    sinon.stub(Matches, 'findAll').resolves(mListMatchers as unknown as Matches[]);

    const result = await chai.request(app).get('/matches');
    const { status } = result;

    expect(status).to.equal(200);
  });

  it('Não deve ser possivel um time jogar contra ele próprio', async () => {
    sinon.stub(JWT, 'checkToken').returns({});
    sinon.stub(MatcherService.prototype, 'create').callsFake(() => {
      throw new HandleError(
        StatusCodes.UNAUTHORIZED,
        'It is not possible to create a match with two equal teams',
      );
    });

    const result = await chai.request(app)
      .post('/matches')
      .send({
        homeTeam: 8,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2
      })
      .set({ authorization: 'token'});

    const { status, body } = result;

    expect(status).to.equal(401);
    expect(body).to.have.property('message');
    expect(body.message).to.equal(
      'It is not possible to create a match with two equal teams'
    );

  });

  it('Cadastrar um matchers com um time inexistente deve retornar um erro', async () => {
    sinon.stub(JWT, 'checkToken').returns({});
    sinon.stub(Team, 'findOne').resolves(null);
    sinon.stub(MatcherService.prototype, 'create').callsFake(() => {
      throw new HandleError(
        StatusCodes.NOT_FOUND,
        'There is no team with such id!',
        );
    });

    const result = await chai.request(app)
      .post('/matches')
      .send({
        homeTeam: 80,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2
      })
      .set('authorization', 'token');

    const { status, body } = result;

    expect(status).to.equal(404);
    expect(body).to.have.property('message');
    expect(body.message).to.equal(
      'There is no team with such id!'
    );
  });

  it('Cadastrar um novo matcher', async () => {
    sinon.stub(JWT, 'checkToken').returns({});
    sinon.stub(Matches, 'create').resolves(mockMatchers as Matches);
    sinon.stub(Team, 'findOne').resolves({
      id: 5,
      teamName: "Cruzeiro"
   } as Team);

    const result = await chai.request(app)
      .post('/matches')
      .send({
        homeTeam: 16,
        awayTeam: 8,
        homeTeamGoals: 2,
        awayTeamGoals: 2
      })
      .set({ authorization: 'token'});

    const { status } = result;

    expect(status).to.equal(201);
  });

  it('É possivel atualizar o número de gols de um matcher', async () => {
    sinon.stub(Matches, 'update').resolves();

    const result = await chai.request(app)
      .patch('/matches/:id')
      .send({
        homeTeamGoals: 3,
        awayTeamGoals: 1
      });

    const { status, body } = result;

    expect(status).to.equal(200);
    expect(body).to.have.property('message');
    expect(body.message).to.equal('Updated!');
  });

  it('É possivel alterar o inPorgress de uma partida', async () => {
    sinon.stub(JWT, 'checkToken').returns({});
    sinon.stub(MatcherService.prototype, 'updateProgress').resolves();
    sinon.stub(Matches, 'update').resolves();

    const result = await chai.request(app)
      .patch('/matches/:id/finish')
      .set({ authorization: 'token'});;

      const { status, body } = result;

    expect(status).to.equal(200);
    expect(body).to.have.property('message');
    expect(body.message).to.equal('Finished');

    sinon.restore();
  });

});
