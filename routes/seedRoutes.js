import express from "express";
import Meetup from "../models/meetupModel.js";
import data from "../data.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  data.meetups.forEach((meetup) => {
    if (meetup.reviews.length === 0) meetup.averageRating = 0;
    else {
      const averageRating =
        meetup.reviews.reduce((acc, review) => (acc += review.rating), 0) /
        meetup.reviews.length;
      meetup.averageRating = Math.ceil(averageRating * 100) / 100;
    }
  });
  await Meetup.remove({});
  const createdMeetups = await Meetup.insertMany(data.meetups);
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdMeetups, createdUsers });
});
export default seedRouter;
