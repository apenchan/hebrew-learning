const express = require("express");
var path = require("path");
const app = express();
var port = process.env.PORT || 3000;

app.use(express.static("./src/index.js/"));
app.use(express.static("./client/dist/"));
// app.use(express.static('./controllers'));
app.use(express.static("./node_modules"));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.listen(port);
console.log(
  "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
);
