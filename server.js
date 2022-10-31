import express from "express";
import cors from "cors";
import path from "path";

// import userRouter from "./routes/userRoutes.js";

// import productRouter from "./routes/productRoutes.js";

// import seedRouter from "./routes/seedRoutes.js";

// import orderRouter from "./routes/orderRoutes.js";

import "./db-connect.js";
import { config } from "./config.js";

const port = config.PORT || 4589;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.FRONTEND_BASE_URL,
    methods: ["POST", "PUT", "GET", "DELETE", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.set("trust proxy", 1);

// app.use("/api/seed", seedRouter);
// app.use("/api/products", productRouter);
// app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
