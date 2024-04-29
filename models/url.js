const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
   shortId:{
    type:String,
    require: true,
    unique:true
   },
   redirectURL:{
    type:String,
    require:true,
    unique: true
   },
   visitedHistory:[{timeStamp:{type:Number}}]
},{timestamps:true});

const Url = mongoose.model("url",urlSchema);

module.exports = Url;