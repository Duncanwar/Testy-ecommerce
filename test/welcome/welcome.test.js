import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);
chai.should();

describe('Welcome to endPoints Testing', () => {
  it('Should return a message confirming api connection', (done) => {
    chai
      .request(app)
      .get('/api')
      .end((err, res) => {
        if (err) done(err);
        const { message } = res.body;
        expect(res.status).to.equal(200);
        expect(message);
        expect(message).to.equal('Well connected api');
        done();
      });
  });
});
