import mongoose from "mongoose";

const user = mongoose.Schema(
  {
    name: {
      type: String,
      require: true["enter your full name"],
    },

    username: {
      type: String,
      require: true["enter your user name"],
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      require: true["please enter your email"],
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    phoneNumber: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const users = mongoose.model("Users", user);
export default users;
