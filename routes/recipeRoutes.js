const request = require("request");
const YOUR_APP_ID = process.env.YOUR_API_ID;
const YOUR_APP_KEY = process.env.YOUR_API_KEY;

module.exports = function(app) {
  const url = "https://api.edamam.com/search?";
  app.post("/searchfood", (req, res) => {
    let newUrl = `${url}q=${
      req.body.food
    }&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=1`;
    request(newUrl, function(error, response, body) {
      // error ? res.json(error) : res.json(body);

      if (error) {
        res.json(error);
      } else {
        res.json(JSON.parse(body));
      }
    });
  });
};

