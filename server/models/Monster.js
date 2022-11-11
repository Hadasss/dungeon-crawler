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

// Monster methods
monsterSchema.methods.dealDamage = function() {
  return Math.floor(Math.random() * this.damage) + 1;
}

// Roll attack
monsterSchema.methods.rollAttack = function() {
  return Math.floor(Math.random() * 20) + 1;
}

// Method to drop loot and award XP when killed
monsterSchema.methods.die = function() {
  // Award a random amount of XP multiplied by the monster's challenge attribute
  let xpValue = Math.floor(Math.random() * 100) + 1;
  xpValue = xpValue * this.challenge;

  return xpValue;
}


const Monster = model("Monster", monsterSchema);

export default Monster;

// TODO: items
