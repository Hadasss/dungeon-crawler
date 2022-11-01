import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const playerSchema = new Schema(
  {
    playerId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      required: true,
    },
    playerName: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      trim: true,
    },
    strength: {
      type: Number,
      required: true,
    },
    health: {
      type: Number,
      required: true,
    },
    intelligence: {
      type: Number,
      required: true,
    },
    dexterity: {
      type: Number,
      required: true,
    },
    constitution: {
      type: Number,
      required: true,
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      setters: true,
    },
  }
);

// TODO add randomly generated properties and attributes to player

// to create and retrieve player's array of item (or: "arsenal"):
playerSchema.virtual("arsenal").get(function () {
  return this.items;
});

const Player = model("Player", playerSchema);

export default Player;
