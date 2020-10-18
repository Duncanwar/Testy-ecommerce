import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';
import queryMock from '../data/query.mock';

chai.use(chaiHttp);
chai.should();

const { query, queryWithWrongEmail, emptyQuery } = queryMock;

describe('Query Testing', () => {
  it('QueryMessage sent', (done) => {
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

  it('QueryMessage sent', (done) => {
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

  it('QueryMessage with wrong inputs', (done) => {
    chai
      .request(app)
      .post('/api/v1/queries')
      .send(queryWithWrongEmail)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.be.equal(400);
        expect(message).to.be.a('string');
        done();
      });
  });

  it('QueryMessage with wrong inputs', (done) => {
    chai
      .request(app)
      .post('/api/v1/queries')
      .send(emptyQuery)
      .end((err, res) => {
        const { message } = res.body;
        expect(res.status).to.be.equal(400);
        expect(message).to.be.a('string');
        done();
      });
  });
});
