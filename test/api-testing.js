var express = require('express');
var request = require('supertest');
var expect = require('chai').expect;

function createApp(){
  app = express();

  var router = express.Router();
  router.route('/index').get(function(req, res){
    return res.json({goodCall: true});
  });

  app.use(router);

  return app;
}

describe('our server', function(){
  var app;

  before(function(done){
    app = createApp();
    app.listen(function(err){
      if (err){return done(err)}
      done();
    });
  });

  it('should send back a JSON object witj goodCall set to true', function(done){
    request(app)
          .get('/index')
          .set('Content-Type', 'application/json')
          .expect(200, function(err, res){
            if (err){return done(err)}
            callStatus = res.body.goodCall;
            expect(callStatus).to.equal(true);
            done();
          });
  });
});
