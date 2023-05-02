require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
// const authRouter = require("./auth/router/index.js");
// const errorMiddleware = require("./auth/middleware/error-middleware.js");

const PORT = process.env.PORT || 5000;
// const DB_URL = process.env.DB_URL;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use("/auth", authRouter);
// app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // await mongoose.connect(DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    app.listen(PORT, () => console.log(`server started on PORT: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
