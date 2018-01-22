module.exports = function(app) {
  
    var User = app.models.User;
  
    User.afterRemote('login', function(ctx, res, next){
  
      User.findById(res.userId, function(err, user){
          if(err)console.log("Error", err)
          console.log("respuesta del find : ", user)
          user.loggedAt = new Date()
          user.save()
  
          next();
        });
      
    });
  
    User.betweenDates = function(msg, cb) {
      console.log('Running remote method: beteweenDates');
      cb(null, 'response');
    };
  
    User.remoteMethod(
      'betweenDates',
      {
        accepts: {
          arg: 'msg',
          type: 'string'
        },
        returns: {
          arg: 'msg',
          type: 'string'
        }
      }
    );
  
    console.log(User);
  
  };
