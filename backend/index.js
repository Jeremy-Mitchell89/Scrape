const express = require("express");
const cors = require("cors");
const db = require("diskdb");
const bodyParser = require("body-parser");
const app = express();
db.connect("./db", ["items"]);

require("./scrapeCraigslist");

app.use(cors());
app.use(bodyParser.json());

app.get("/test", (req, res) => {
  const items = db.items.find();
  res.json(items);
});

app.listen(8000, console.log("server running on 8000"));
