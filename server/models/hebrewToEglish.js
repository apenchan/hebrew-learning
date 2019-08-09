var mongoose = require("mongoose");

var hebrewToEglishSchema = new mongoose.Schema({
  hebrew: "",
  english: ""
});

const HebrewToEnglish = mongoose.model("HebrewToEnglish", hebrewToEglishSchema);

module.exports = HebrewToEnglish;
