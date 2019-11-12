var express = require('express');

describe('express application testing', function(){
  var app,
      date;


  this.timeout(5000);

  before(function(done){
    app = express();

    app.listen(3000, function(err){
      if (err) {return done(err)}
      done();
    })
  });

  beforeEach(function(){
    date = new Date();
  });

  after(function(){
    console.log('application resting done');
  });

  afterEach(function(){
    console.log('the date for that one was', date)
  });

  it('should exit with no err', function(){
    if (5 ==3){
      throw new Error('oh no')
    }
  });

  it('should understand basic truths', function(){
    if (false){
      throw new Error('this isint working');
    }
  });

  describe('(deeper)', function(){

      before(function(){
        console.log('negin to go deeper')
      });

      it('should perform basic math', function(){
        if (1+1 != 2){
          throw new Error('bad math my friend');
        }
      });

      it('should perform basic counting', function(){
        if ('abc'.length != 3){
          throw new Error('not counting so good');
        }
      });
  });
});

// describe('firts test using mocha', function(){
//
//   it('should test my hipothesis of a function test', function(done){
//
//     if (5 == 5){
//       done();
//     }else{
//       done(new Error('Something went wrong'));
//     }
//   });
//
//   it('should exit with no err', function(){
//     if (5 ==3){
//       throw new Error('oh no')
//     }
//   });
// });
