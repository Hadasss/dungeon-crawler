import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;
const items = require("../util/items-array");

const itemSchema = new Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  itemValue: {
    type: Number,
    required: true,
  },
  itemCost: {
    type: Number,
    required: true,
  },
  itemDescription: {
    type: String,
  },
  itemImage: {
    type: String,
    // Would specify a URL path
  },

  // Method to assign from the random array of items and types
  // When assigning a random type, draw the attributes
});

const Item = model("Item", itemSchema);

itemSchema.methods.getRandomItem = function () {
  return Math.random(items);
};

export default Item;
