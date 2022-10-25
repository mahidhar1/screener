const fs = require("fs");
const jsonFilePath = "./data.json";

const getData = async (req, res) => {
  //res.send("data");
  fs.readFile(jsonFilePath, "utf8", (err, data) => {
    if (err) {
      throw err;
    }

    res.send(JSON.parse(data));
  });
};

module.exports = { getData };
