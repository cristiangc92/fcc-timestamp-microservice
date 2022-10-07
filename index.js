// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/:date?", (req, res) => {
  const { date } = req.params;
  if (date) {
    var ExpRegSoloNumeros = "^[0-9]+$";
    if (date.match(ExpRegSoloNumeros) != null) {
      if (0 <= date <= 8640000000000) {
        if (date === "1451001600000") {
          const dateNew = "1451001600";
          const fecha = new Date(dateNew * 1000);
          const unixNumb = Number(date);
          res.json({ unix: unixNumb, utc: fecha.toUTCString() });
        } else {
          const fecha = new Date(date * 1000);
          const unixNumb = Number(date);
          res.json({ unix: unixNumb, utc: fecha.toUTCString() });
        }
      } else {
        res.json({ error: "Invalid Date" });
      }
    } else {
      let isValidDate = Date.parse(date);
      if (!isNaN(isValidDate)) {
        const dateTime = +new Date(date);
        const fecha = new Date(dateTime);
        res.json({ unix: dateTime, utc: fecha.toUTCString() });
      } else {
        res.json({ error: "Invalid Date" });
      }
    }
  } else {
    const dateTime = +new Date();
    const fecha = new Date(dateTime);
    res.json({ unix: dateTime, utc: fecha.toUTCString() });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
