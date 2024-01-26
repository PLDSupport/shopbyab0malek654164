const client = require('../main.js');
const mongoose = require("mongoose");

// schema file
module.exports = mongoose.model(
  "connect",
  new mongoose.Schema({
    guild: String, 
    code : String,
    ///
  })
  
);