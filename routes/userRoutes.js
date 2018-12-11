var db = require("../models");

module.exports = function(app) {
  // Get all user
  app.post("/user/login", function(req, res) {
    db.user.findOne({where: {
      email: req.body.email,
      password: req.body.password
    }})
    .then(function(dbExamples) {
      res.json(dbExamples);
    })
    
  });

  // Create a new user
  app.post("/user/register", function(req, res) {
    // we create the database
    db.user.create(req.body).then(function(dbExample) {
      res.json('user created');
    })
    // respond the error
    .catch( err => res.json(err))
  });

  // Delete an user by id
  app.delete("/user/delete/:id", function(req, res) {
    db.user.destroy({
      where: {
         id: req.params.id 
      }, 
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
