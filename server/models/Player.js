import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const playerSchema = new Schema(
  {
    // FROM Jonathan: "My understanding is that Mongoose will auto-generate an _id field.  Why do we need this?"
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
      default: 10
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
    charisma: {
      type: Number,
      required: true,
      default: 10
    },
    health: {
      type: Number,
      required: true,
    },
    armorClass: {
      type: Number,
      required: true,
      default: 10
    },
    damage: {
      type: Number,
      required: true,
      default: 4
    },
    level: {
      type: Number,
      required: true,
      default: 1
    },
    xp: {
      type: Number,
      required: true,
      default: 0
    },
    nextLevel: {
      type: Number,
      required: true,
      default: 100
    },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    gold: {
      type: Number,
      required: true,
      default: 0
    }
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
// FROM Jonathan: "^ Is this for test purposes?  Players would be able to generate their own numbers."

// to create and retrieve player's array of item (or: "arsenal"):
// FROM Jonathan: "I am renaming this 'inventory' to follow typical videogame and RPG convention, so as to be more
// easily remembered."
playerSchema.virtual("inventory").get(function () {
  return this.items;
});

// Virtuals for attributes...

// Set and get damage

// Set and get health

// Set and get armorClass

// 

// -----------------------


// Methods for actions...

// Roll attack dice

// levelUp - will set new level and nextLevel value, and increment health and other attributes

// equip an item from inventory

const Player = model("Player", playerSchema);

export default Player;
