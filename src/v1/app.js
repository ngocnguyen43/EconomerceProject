import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import Database from "./db/init.js";
const app = express();
// console.log(`Process `, process.env);
//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
//init db
Database.getInstance();
//init  routes
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "HAHAHA",
  });
});
//handle error

export default app;
