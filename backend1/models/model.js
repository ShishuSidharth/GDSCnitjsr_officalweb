const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  registration: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  teamType: {
    type: String,
    enum: ["lead", "core team member"],
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
  },
  imageurl: {
    type: String,
  },
  github: {
    type: String,
    required: false,
    default: "https://github.com",
  },
  mail: {
    type: String,
    required: false,
  },
  linkedin: {
    type: String,
    required: false,
    default: "https://linkedin.com",
  },
  facebook: {
    type: String,
    required: false,
    default: "https://facebook.com",
  },
  instagram: {
    type: String,
    required: false,
    default: "https://instagram.com",
  },
  x: {
    type: String,
    required: false,
    default: "https://x.com",
  },
  createdat: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("model", schema);
module.exports = model;
