import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const roomSchema = new Schema({
  roomId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  roomLevel: {
    type: Number,
    required: true,
  },
  checkpoint: {
    type: Boolean,
  },
});

const Room = model("Room", roomSchema);

export default Room;
