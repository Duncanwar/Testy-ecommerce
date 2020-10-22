import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import articleMock from '../data/article.mock';
import userMock from '../data/user.mock';

chai.use(chaiHttp);
chai.should();

const { adminRegister, adminLogin } = userMock;
const { article1, emptyArticle } = articleMock;
let adminToken;
let articleId;

describe('Article Testing', () => {
  it('Create admin', (done) => {
    chai
      .request(app)
      .post('/api/v1/signup')
      .send(adminRegister)
      .end((err, res) => {
        const { token, message } = res.body;
        // adminToken = token;
        expect(res.status).to.equal(201);
        expect(message);
        // expect(token).to.be.a('string');
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
  it('Create an article while admin', (done) => {
    chai
      .request(app)
      .post('/api/v1/articles')
      .set('authorization', `Bearer ${adminToken}`)
      .send(article1)
      .end((err, res) => {
        const { token, message } = res.body;
        adminToken = token;
        expect(res.status).to.equal(201);
        expect(message);
        expect(token).to.be.a('string');
        done();
      });
  });

  it('Get all article by an admin', (done) => {
    chai
      .request(app)
      .get('/api/v1/articles')
      // .set('authorization', `Bearer ${adminToken}`)
      .end((err, res) => {
        const { data, message } = res.body;
        expect(res.status).to.equal(200);
        expect(message);
        expect(message).to.be.a('string');
        expect(data).to.be.a('array');
        done();
      });
  });

  it('Get one article by an admin', (done) => {
    chai
      .request(app)
      .get('/api/v1/articles/FlexBox')
      .end((err, res) => {
        const { data, message } = res.body;
        articleId = data._id;
        expect(res.status).to.equal(200);
        expect(message);
        expect(data).to.be.a('object');
        done();
      });
  });

  // it('Update article one article by an admin', (done) => {
  //   chai
  //     .request(app)
  //     .patch(`/api/v1/articles/${articleId}`)
  //   .set('authorization', `Bearer ${adminToken}`)
  //     //.send({ updatedAt: new Date().toISOString() })
  //     .end((err, res) => {
  //       const { data, message } = res.body;
  //       expect(res.status).to.equal(200);
  //       expect(message);
  //       expect(message).to.be.a('string');
  //       done();
  //     });
  // });

  // it('Delete one article while an admin', (done) => {
  //   chai
  //     .request(app)
  //     .delete(`/api/v1/articles/${articleId}`)
  //     .set('authorization', `Bearer ${adminToken}`)
  //     .end((err, res) => {
  //       const {  message } = res.body;
  //       expect(res.status).to.equal(200);
  //       expect(message);
  //       expect(message).to.be.a('string');
  //       done();
  //     });
  // });
});
