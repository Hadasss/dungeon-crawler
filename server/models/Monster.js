import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const monsterSchema = new Schema({
  monsterId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  monsterName: {
    type: String,
    required: true,
  },
  challenge: {
    type: Number,
    required: true,
  },
  health: {
    type: Number,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
  armorClass: {
    type: Number,
    required: true,
  },
});

const Monster = model("Monster", monsterSchema);

export default Monster;

// health
// armorClass
// name
// damage

// TODO: Challengf
// TODO: items
