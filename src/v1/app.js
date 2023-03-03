import compression from "compression";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import Database from "./db/init.js";
import router from "./routes/index.js";
import { checkOverLoad } from "./helper/CheckConnections.js";
const app = express();
// console.log(`Process `, process.env);
// checkOverLoad();
//init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//init db
Database.getInstance();
//init  routes
app.use("", router);
//handle error

export default app;
