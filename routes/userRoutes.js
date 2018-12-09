var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/user/examples", function(req, res) {
    db.user.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    })
    
  });

  // Create a new example
  app.post("/user/examples", function(req, res) {
    // we create the database
    db.user.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    })
    // respond the error
    .catch( err => res.json(err))
  });

  // Delete an example by id
  app.delete("/user/examples/:id", function(req, res) {
    db.user.destroy({
      where: {
         id: req.params.id 
      }, 
    }).then(function(dbExample) {
      res.json(dbExample);
    });

    // db.food.destroy({ where: { userId: req.params.id } }).then(function() {
    //   db.user.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
    //     res.json(dbExample);
    //   });   
    // });
  });
};
