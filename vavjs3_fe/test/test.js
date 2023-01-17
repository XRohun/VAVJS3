var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = "http://localhost:5000";
var expect = chai.expect;


let methodId = "";
describe("As user admin with id:1 create method and add weight measurement", function() {
    describe("Create method and add weight measurement", function() {
        it("Create method", function(done) {
            chai.request(app)
            .post('/method/1')
            .send({
            activityName: 'Swimming', 
            })
            .end(function (err, res) {
                expect(res.body.value).to.equal("Swimming");
                expect(res.body.userId).to.equal(1);        
                methodId = (res.body.id).toString();     
                done();
            });
        });
        it("Create measurement for weight", function(done) {
          chai.request(app)
          .post(`/weight/${methodId}`)
          .send({
          weight: 40, 
          date: '2019-01-01',
          activityId: methodId
          })
          .end(function (err, res) {
              expect(res.body.value).to.equal(40);
              expect(res.body.date).to.equal('2019-01-01');
              expect(res.body.activityId).to.equal(parseInt(methodId));
              done();
          });
      });
    });
});