import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: [true, "Please tell us your name!"] },
    firstName: { type: String, required: [true, "Please tell us your name!"] },
    lastName: { type: String, required: [true, "Please tell us your name!"] },
    email: {
      type: String,
      required: [true, "Please provide your email!"],
      unique: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minlength: 6,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: [
        true,
        "User groups is very important to reach right field in our app!",
      ],
    },
    Favorites: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meetup",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
