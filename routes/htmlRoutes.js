var db = require("../models");



module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.user.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load login page
  app.get("/login", function(req, res) {
      res.render("login", {
        msg: "Welcome!",
      });
  });

  // Load register page
  app.get("/register", function(req, res) {
      res.render("register", {
        msg: "Welcome!",
      });
  });

  // Load find food page
  app.get("/search", function(req, res) {
      res.render("foodSearch", {
        msg: "Welcome!",
      });
  });

  // Load add food page
  app.get("/addfood", function(req, res) {
      res.render("addfood", {
        msg: "Welcome!",
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
