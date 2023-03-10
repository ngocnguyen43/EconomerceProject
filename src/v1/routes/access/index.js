import express from "express";
import AccessController from "./../../controller/access.controller.js";
import { apiKey } from "./../../auth/checkAuth.js";

const authrouter = express.Router();

authrouter.use(apiKey);
authrouter.post("/shop/signup", AccessController.signup);

export default authrouter;
