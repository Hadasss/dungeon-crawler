import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
      required: true,
    },
    username: {
      type: String,
      required: "Please type your username",
      unique: true,
      minLength: 3,
      trim: true,
    },
    password: {
      type: String,
      unique: true,
      required: "Please type your password",
      trim: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
      setters: true,
    },
  }
);

const User = model("User", userSchema);

export default User;
