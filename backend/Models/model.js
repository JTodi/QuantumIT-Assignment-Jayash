const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  dob:{
    type:Date,
    required: true
  },
  email:{
    type:String,
    required: true
  },
  password:{
    type:String,
    required: true
  }
})

module.exports = mongoose.model('dataset', DataSchema);