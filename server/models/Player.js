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
// Virtuals seem to be distinct from other attributes, so maybe we use virtuals for score and stats
// score
playerSchema.virtual("score")
  .get(function() {
    // Set score to a combination of player's gold and xp
    return this.gold + this.xp;
  })
  .set(function(value) {
    this.set(value);
  });


// TODO: Create virtuals for each of the bonuses.  Bonuses should start at score 12 and reach max 4

  
// -----------------------
  
  
// Methods for actions...

// Roll attack dice
playerSchema.methods.rollAttack = function() {
  let roll = Math.floor(Math.random() * 20) + 1;
  return roll;
}

// equip a weapon from inventory
playerSchema.methods.equipWeapon = function() {
  // Assign equipped weapons to items array at index [0]
}

// equip armor from inventory
playerSchema.methods.equipArmor = function() {
  // Assign equipped armor to items array index [1]
}

// Deal damage
playerSchema.methods.dealDamage = function() {
  // Grab player's damage score from equipped weapon
  const weapon = this.items[0];

  const maxDamage = weapon.value;

  // Roll between 1 and the maxDamage value pulled from the weapon's value attribute
  let roll = Math.floor(Math.random() * maxDamage) + 1;
  
  // Add any modifiers to the attack roll and compute total
  let total = roll + Math.floor(this.strength / 5);

  return total;
}

// levelUp - will set new level and nextLevel value, and increment health and other attributes


const Player = model("Player", playerSchema);

export default Player;
