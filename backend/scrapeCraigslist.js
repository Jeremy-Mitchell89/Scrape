const db = require("diskdb");
const axios = require("axios");
const cron = require("node-cron");
const parseString = require("xml2js").parseString;

db.connect("./db", ["items"]);

const scrapeCraigslist = async function(url) {
  axios.get(url).then(res => {
    parseString(res.data, (err, result) => {
      const data = result["rdf:RDF"].item.map(item => ({
        title: String(item.title).split("&")[0],
        price: String(item.title).split(";")[1],
        link: item.link,
        description: item.description,
        date: item["dc:date"],
        imageURL: item["enc:enclosure"]
          ? item["enc:enclosure"][0]["$"].resource
          : "No Image",
        nope: false
      }));
      data.forEach(element => {
        const existingItem = db.items.findOne({ title: element.title });
        if (existingItem) {
          console.log(`Skipping item ${element.title}`);
          return;
        }
        const saveItem = db.items.save(element);
        console.log(`Saved item ${element.title}`);
      });
    });
  });
};

cron.schedule("* */2 * * *", async () => {
  scrapeCraigslist(
    "https://minneapolis.craigslist.org/search/sss?format=rss&query=kayak"
  );
  console.log(`scrapes done`);
});

// scrapeCraigslist(
//   "https://minneapolis.craigslist.org/search/sss?format=rss&query=kayak"
// );

module.exports = { scrapeCraigslist };
