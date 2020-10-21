import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import userMock from '../data/user.mock';

chai.use(chaiHttp);
chai.should();

const { user1, user1Login, userEmpty, user1wrongcredetianls } = userMock;

describe('User Test', () => {
  it('Should create a user', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(user1)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(201);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Should not duplicate user by same email', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(user1)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(409);
        expect(message);
        done();
      });
  });

  it('Login user by email', (done) => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send(user1Login)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(200);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Should not allow empty ', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(userEmpty)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(400);
        expect(message);
        done();
      });
  });
  it('Should not allow user by wrong email', (done) => {
    chai
      .request(app)
      .post('/api/v1/login')
      .send(user1wrongcredetianls)
      .end((err, res) => {
        const { token, message } = res.body;
        expect(res.status).to.equal(400);
        expect(message);
        done();
      });
  });
});
