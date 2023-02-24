import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import instance from "./db/init.js";
const app = express();

//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db
instance;
//init  routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "HAHAHA",
  });
});
//handle error

export default app;
