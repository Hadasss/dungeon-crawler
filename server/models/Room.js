import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;
const items = require("../util/items-array");
const monstersArray = require("../util/monsters-array");

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
  monsters: [
    {
      type: Schema.Types.ObjectId,
      ref: "Monster",
    },
  ],
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});


// Methods

// Fill the room with a random number and type of monsters and items
roomSchema.methods.fillRoom = function() {
  // Define the max number of monsters based on the room level
  let maxNumMonsters = this.roomLevel * 2;
  let numMonsters = Math.floor(Math.random() * maxNumMonsters); // Include the possibility of 0 monsters

  // Fill the room with numMonsters number of randomly-selected monster objects from the monster
  // array
  for (let i = 0; i < numMonsters; i++) {
    let arrayIndex = Math.floor(Math.random() * monstersArray.length);
      // Check the monsters array at index arrayIndex.
      // If its challenge is <= the room level, add it to the room
      if (monstersArray[arrayIndex].challenge <= this.roomLevel) {
        this.monsters.push(monstersArray[arrayIndex])
      }
    }
  }

  // TODO: Fill the room with a random amount and type of items

const Room = model("Room", roomSchema);

export default Room;
