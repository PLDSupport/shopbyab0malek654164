const client = require('../main.js');
const mongoose = require("mongoose");

// schema file
module.exports = mongoose.model(
  "marv_discount",
  new mongoose.Schema({
    guild: String, 
    discountcode : String,
    amount : String,
    ///
  })
  
);