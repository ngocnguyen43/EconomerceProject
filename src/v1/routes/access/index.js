import express from "express";
import AccessController from "./../../controller/access.controller.js";

const authrouter = express.Router();

authrouter.post("/shop/signup", AccessController.signup);

export default authrouter;
