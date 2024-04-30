const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
      unique: true,
    },
    visitedHistory: [{ timeStamp: { type: Number } }],
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"users"
    }
  },
  { timestamps: true }
);

const Url = mongoose.model("url", urlSchema);

module.exports = Url;
