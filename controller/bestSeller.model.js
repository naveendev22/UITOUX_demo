const mongoose = require("mongoose");
const { Schema } = mongoose;

const best_seller = new Schema({
  name: {
    type: String,
  },

  reviews: {
    type: String,
  },
  new_price: {
    type: String,
  },
  old_price: {
    type: String,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  creadtedAt: {
    type: Date,
    default: Date.now,
  },
  updtaedAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("best_seller", best_seller);
