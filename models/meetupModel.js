import mongoose from "mongoose";

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

const meetupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    adress: { type: String, required: true },
    images: [String],
    category: { type: String, required: true },
    description: { type: String, required: true },
    averageRating: { type: Number },
    reviews: [reviewSchema],
    isFavorite: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

const Meetup = mongoose.model("Meetup", meetupSchema);
export default Meetup;
