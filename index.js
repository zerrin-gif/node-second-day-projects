const http = require('http');
let request = require('request');
require('dotenv').config()
const apiKey = process.env.apiKey;

// let apiKey='2082573baa2c88e4ee84edd0044c8192';

const myserver = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<form method='post'> <input name='city'> <button>Submit</button> </form>"
  );
  let body = "";
  req.on("data", function (chunk) {
    //takes input value from DOM
    body += chunk;
    console.log(body);
    const city = body
    const url = "http://api.weatherstack.com/current?access_key=" + apiKey + "&query=" + city;
    request(url, function (err, response, body) {
      if (err) {
        console.log("error:", error);
      } else {
        const info = JSON.parse(body);
        console.log("body:", info.location.name);
        res.end(
          `Today ${info.current.temperature} degrees in ${info.location.name} `
        );
      }
    });
  });
});
myserver.listen(3000)

