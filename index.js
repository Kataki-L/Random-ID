// Libraries
const rndgen = require("./Codes/RandomID");
const path = require("path");
const fs = require("fs");
const express = require("express");
// HTML Page File Location
var pathname = path.join(__dirname, "Html Pages", "Main.html");

const app = express();
app.use(express.static(__dirname + "/Html Pages"));
app.get("", function (req, res) {
  // Pass URL Parameters To RandomGenerator
  const randomdata = rndgen(req.query.style);
  //Read HTML File
  fs.readFile(pathname, (err, content) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // Replacing Datas In HTML Codes And Rendering It
    res.end(
      content
        .toString()
        .replace("AgePlace", randomdata.age)
        .replace("NamePlace", randomdata.name)
        .replace("URLPlace", randomdata.url)
        .replace("AvatarUrlPlace", randomdata.avatar),
      "utf8"
    );
  });
});
// Set Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
