"use strict";

import express from "express";
import authrouter from "./access/index.js";

const router = express.Router();

router.use("/api/v1", authrouter);
router.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello",
  });
});

export default router;
