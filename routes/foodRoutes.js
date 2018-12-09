var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/food/examples", function(req, res) {
    db.food.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    })
    
  });

  // Create a new example
  app.post("/food/examples", function(req, res) {
    // we create the database
    db.food.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    })
    // respond the error
    .catch( err => res.json(err))
  });

  // Delete an example by id
  app.delete("/food/examples/:id", function(req, res) {
    db.food.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
