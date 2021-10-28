const rndgen = require("./Codes/RandomID");
const path = require("path");
const fs = require("fs");
const http = require("http");
var pathname = path.join(__dirname, "Html Pages", "Main.html");

const server = http.createServer((req, res) => {
  const randomdata = rndgen();

  fs.readFile(pathname, (err, content) => {
    res.writeHead(200, { "Content-Type": "text/html" });
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
  console.log(rndgen());
  //res.end(Content);
});
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
