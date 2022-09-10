import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../app';
import User from '../database/models/user';
import LoginService from '../services/loginService';
import HandleError from '../utils/handleError';
import { StatusCodes } from 'http-status-codes';
import IUser from '../interfaces/IUser';
import JWT from '../utils/jwt';
import Encrypty from '../utils/bcrypt';

chai.use(chaiHttp);

const { expect } = chai;

const emptyRequest = {
  email: '',
  password: ''
}

const newUser1 = {
  email: 'danny@user.com',
  password: 'senha123'
}

const registryUser = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

const user: IUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
}

describe('Teste Login', () => {
  it('Lança um erro com o status 400 se não receber email ou password', async () => {
    sinon.stub(LoginService.prototype, 'login').callsFake(() => {
      throw new HandleError(
        StatusCodes.BAD_REQUEST,
        'All fields must be filled',
      );
    });

    const response = await chai.request(app).post('/login').send(emptyRequest);
    const { body, status } = response;

    expect(status).to.equal(400);
    expect(body).to.have.property('message');
    expect(body.message).to.equal('All fields must be filled');

    sinon.restore();
  });

  it('Lança um erro com o status 401 ao tentar logar com usuário/senha incorreto(s)', async () => {
    sinon.stub(User, 'findOne').resolves(user as User);
    sinon.stub(LoginService.prototype, 'login').callsFake(() => {
      throw new HandleError(
        StatusCodes.UNAUTHORIZED,
        'Incorrect email or password',
      );
    });

    const response = await chai.request(app).post('/login').send(newUser1);
    const { body, status } = response;

    expect(status).to.equal(401);
    expect(body).to.have.property('message');
    expect(body.message).to.equal('Incorrect email or password');

    sinon.restore();
  });

  it('Retorna status 200 com um token', async () => {
    sinon.stub(User, 'findOne').resolves(user as User);
    sinon.stub(Encrypty, 'checkPassword').returns();
    sinon.stub(JWT, 'createToken').returns('token');

    const response = await chai.request(app).post('/login').send(registryUser);
    const { body, status } = response;

    expect(status).to.equal(200);
    expect(body).to.have.property('token');

    sinon.restore();
  });
});
