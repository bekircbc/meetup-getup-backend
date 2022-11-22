import mongoose, { Schema } from "mongoose";
// import User from "./userModel.js";

const reviewSchema = new mongoose.Schema(
  {
    userName: { type: String },
    comment: { type: String },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

// const ownerSchema = new mongoose.Schema(
//   {
//     type: Schema.Types.ObjectId,
//   },
//   {
//     timestamps: true,
//   }
// );

const meetupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    images: [String],
    category: { type: String, required: true },
    description: { type: String, required: true },
    averageRating: { type: Number },
    reviews: [reviewSchema],
    owner: { type: Schema.Types.ObjectId },
    isFavorite: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const Meetup = mongoose.model("Meetup", meetupSchema);
export default Meetup;
