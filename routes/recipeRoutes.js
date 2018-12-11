const request = require("request");
const YOUR_APP_ID = process.env.YOUR_API_ID;
const YOUR_APP_KEY = process.env.YOUR_API_KEY;

module.exports = function(app, hey) {
  const url = "https://api.edamam.com/search?";
  app.post("/search", (req, res) => {
    let newUrl = `${url}q=${
      req.body.search
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

// 'https://api.edamam.com/search?q=chicken&app_id=00a4030e&app_key=0b23dd13d4cda0a2b0df67ee81c77175'
