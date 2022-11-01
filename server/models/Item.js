import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const itemSchema = new Schema({
  itemId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
  },
});

const Item = model("Item", itemSchema);

export default Item;
