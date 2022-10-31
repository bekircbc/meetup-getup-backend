import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { config } from "./config.js";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRES_IN,
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    // const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
    const token = authorization;
    jwt.verify(token, config.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

export const orderMailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.MAILER_ACCOUNT_NAME,
    pass: config.MAILER_ACCOUNT_PASSWORD,
  },
});

export const payOrderEmailTemplate = (user) => {
  return `<h1>Thanks for meeting up with us</h1>
  <p>
  Hi ${user.userName},</p>
  <p>We have finished processing your new meetup.</p>
  <hr/>
  <p>
  Thanks for meeting up with us.
  </p>
  `;
};
