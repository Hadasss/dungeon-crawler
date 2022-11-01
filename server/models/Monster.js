import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const monsterSchema = new Schema({
  monsterId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  monsterLevel: {
    type: Number,
    required: true,
  },
});

const Monster = model("Monster", monsterSchema);

export default Monster;
