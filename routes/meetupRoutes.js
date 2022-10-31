import express from "express";
import expressAsyncHandler from "express-async-handler";
import Meetup from "../models/meetupModel.js";
import { isAuth, isAdmin } from "../utils.js";
import path from "path";

const meetupRouter = express.Router();

meetupRouter.get("/", async (req, res) => {
  const meetups = await Meetup.find();
  res.send(meetups);
});

meetupRouter.post(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const newMeetup = new Meetup({
      name: req.body.name || "sample name " + Date.now(),
      slug: req.body.slug || "sample-name-" + Date.now(),
      thumbnail: req.body.thumbnail || "sample thumbnail ",
      images: req.body.images || "/images/p1.jpg",
      price: req.body.price || 0,
      category: req.body.category || "sample category",
      brand: req.body.brand || "sample brand",
      stock: req.body.stock || 0,
      reviews: req.body.reviews || [],
      description: req.body.desciption || "sample description",
      discountPercentage: req.body.discountPercentage || 0,
    });
    const meetup = await newMeetup.save();
    res.send({ message: "Meetup Created", meetup });
  })
);

meetupRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const meetupId = req.params.id;
    const meetup = await Meetup.findById(meetupId);
    if (meetup) {
      meetup.name = req.body.name;
      meetup.slug = req.body.slug;
      meetup.price = req.body.price;
      meetup.images = req.body.images;
      meetup.thumbnail = req.body.thumbnail;
      meetup.category = req.body.category;
      meetup.brand = req.body.brand;
      meetup.stock = req.body.stock;
      meetup.description = req.body.description;
      meetup.discountPercentage = req.body.discountPercentage;
      meetup.reviews = req.body.reviews;

      await meetup.save();
      res.send({ message: "Meetup Updated" });
    } else {
      res.status(404).send({ message: "Meetup Not Found" });
    }
  })
);

meetupRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const meetup = await Meetup.findById(req.params.id);
    if (meetup) {
      await meetup.remove();
      res.send({ message: "Meetup Deleted" });
    } else {
      res.status(404).send({ message: "Meetup Not Found" });
    }
  })
);

meetupRouter.post(
  "/:id/reviews",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const meetupId = req.params.id;
    const meetup = await Meetup.findById(meetupId);
    if (meetup) {
      if (meetup.reviews.find((x) => x.name === req.user.name)) {
        return res
          .status(400)
          .send({ message: "You already submitted a review" });
      }

      const review = {
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      meetup.reviews.push(review);

      meetup.averageRating =
        meetup.reviews.reduce((a, c) => c.rating + a, 0) /
        meetup.reviews.length;
      const updatedMeetup = await meetup.save();
      res.status(201).send({
        message: "Review Created",
        review: updatedMeetup.reviews[updatedMeetup.reviews.length - 1],
        averageRating: meetup.averageRating,
      });
    } else {
      res.status(404).send({ message: "Meetup Not Found" });
    }
  })
);

const PAGE_SIZE = 6;

meetupRouter.get(
  "/admin",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const page = query.page || 1;
    const pageSize = query.pageSize || PAGE_SIZE;

    const meetups = await Meetup.find()
      .skip(pageSize * (page - 1))
      .limit(pageSize);
    const countMeetups = await Meetup.countDocuments();
    res.send({
      meetups,
      countMeetups,
      page,
      pages: Math.ceil(countMeetups / pageSize),
    });
  })
);

meetupRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    // const brand = query.brand || "";
    const category = query.category || "";
    const price = query.price || "";
    const averageRating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};

    const categoryFilter = category && category !== "all" ? { category } : {};
    // const brandFilter =
    //   brand && brand !== "all"
    //     ? { brand: { $regex: brand, $options: "i" } }
    //     : {};
    const ratingFilter =
      averageRating && averageRating !== "all"
        ? {
            averageRating: {
              $gte: Number(averageRating),
            },
          }
        : {};

    const priceFilter =
      price && price !== "all"
        ? {
            // 1-50
            price: {
              $gte: Number(price.split("-")[0]),
              $lte: Number(price.split("-")[1]),
            },
          }
        : {};

    const sortOrder =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { averageRating: -1 }
        : order === "newest"
        ? { createdAt: -1 }
        : { _id: -1 };

    const meetups = await Meetup.find({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countMeetups = await Meetup.countDocuments({
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...ratingFilter,
    });
    res.send({
      meetups,
      countMeetups,
      page,
      pages: Math.ceil(countMeetups / pageSize),
    });
  })
);

meetupRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Meetup.find().distinct("category");
    res.send(categories);
  })
);

meetupRouter.get("/slug/:slug", async (req, res) => {
  const meetup = await Meetup.findOne({ slug: req.params.slug });
  if (meetup) {
    res.send(meetup);
  } else {
    res.status(404).send({ message: "Meetup Not Found" });
  }
});

meetupRouter.get("/:id", async (req, res) => {
  try {
    const meetup = await Meetup.findById(req.params.id);
    res.send(meetup);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

//get id with callback function..

// meetupRouter.get("/:id", (req, res) => {
//   Meetup.findById(req.params.id, (err, meetup) => {
//     if (err) {
//       res.status(404).send(err.message);
//     } else {
//       res.send(meetup);
//     }
//   });
// });

export default meetupRouter;
