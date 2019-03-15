const express = require("express");
const cors = require("cors");
const db = require("diskdb");
const bodyParser = require("body-parser");
const app = express();
db.connect("./db", ["items", "searches"]);

require("./scrapeCraigslist");

app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  const items = db.items.find();
  res.json(items);
});

app.post("/searches", (req, res) => {
  const search = db.searches.save(req.body);
  res.json(search);
});

app.listen(8000, console.log("server running on 8000"));
