import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import queryMock from '../data/query.mock';
import userMock from '../data/user.mock';

chai.use(chaiHttp);
chai.should();

const { query, queryWithWrongEmail, emptyQuery } = queryMock;
const { adminLogin, user2Login, adminRegister, user2 } = userMock;
let adminToken;

describe('Query Testing', () => {
  it('Create admin', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(adminRegister)
      .end((err, res) => {
        const { token, message } = res.body;
        adminToken = token;
        expect(res.status).to.equal(201);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Login admin by email', (done) => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send(adminLogin)
      .end((err, res) => {
        const { token, message } = res.body;
        adminToken = token;
        expect(res.status).to.equal(200);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Send QueryMessage ', (done) => {
    chai
      .request(app)
      .post('/api/v1/queries')
      .send(query)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.be.equal(201);
        expect(message).to.be.a('string');
        done();
      });
  });

  it('Send QueryMessage with wrong inputs', (done) => {
    chai
      .request(app)
      .post('/api/v1/queries')
      .send(queryWithWrongEmail)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.be.equal(400);
        expect(message);
        done();
      });
  });

  it('Send QueryMessage with empty object', (done) => {
    chai
      .request(app)
      .post('/api/v1/queries')
      .send(emptyQuery)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.be.equal(400);
        expect(message);
        done();
      });
  });

  it('Get QueryMessages with admin privilege', (done) => {
    chai
      .request(app)
      .get('/api/v1/queries')
      .set('Authorization', `Bearer ${adminToken}`)
      .end((err, res) => {
        const { message, data } = res.body;
        expect(res.status).to.be.equal(200);
        expect(message);
        expect(message).to.be.a('string');
        expect(data).to.be.a('array');
        done();
      });
  });

  it('Signup user ', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(user2)
      .end((err, res) => {
        const { token, message } = res.body;
        adminToken = token;
        expect(res.status).to.equal(201);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Login user2 by email', (done) => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send(user2Login)
      .end((err, res) => {
        const { token, message } = res.body;
        adminToken = token;
        expect(res.status).to.equal(200);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Getting QueryMessages with user privilege is forbidden', (done) => {
    chai
      .request(app)
      .get('/api/v1/queries')
      .set('Authorization', `Bearer ${adminToken}`)
      .end((err, res) => {
        const { error } = res.body;
        expect(res.status).to.be.equal(403);
        expect(error);
        expect(error).to.be.a('string');
        done();
      });
  });
});
