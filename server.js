const express = require("express");
var path = require("path");
const app = express();
var mongoose = require("mongoose");
var db = process.env.MONGODB_URI || "mongodb://localhost/citizen-cafe-learn";
mongoose.connect(db);
const HebrewToEnglish = require("./server/models/hebrewToEglish.js");

var port = process.env.PORT || 3000;

app.use(express.static("./src/index.js/"));
// app.use(express.static('./controllers'));
app.use(express.static("./node_modules"));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});

app.get('/hebrew', function(req, res){
  HebrewToEnglish.find({}).exec(function(err, results){
    if(err){
      console.log(err)
    } else {
      console.log(results)
      res.send(results)
    }
  })
})

// var hebrewToEglish1 = new HebrewToEnglish({
//     hebrew: 'שום דבר',
//     english: 'nothing',
// })
// hebrewToEglish1.save(function(err, data){
//   if(err){
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
app.listen(port);
console.log(
  "Server is running on http://localhost:3000 or http://127.0.0.1:3000"
);
