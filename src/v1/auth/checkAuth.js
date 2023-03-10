"use strict";
import { findById } from "./../service/apiKey.service.js";
const HEADER = {
  API_KEY: "x-api-key",
  AUTHORIZATION: "authorization",
};
export const apiKey = async (req, res, next) => {
  try {
    const key = req.headers[HEADER.API_KEY]?.toString();
    if (!key) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    const objKey = await findById(key);
    if (!objKey) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }
    req.objKey = objKey;
    return next();
  } catch (error) {}
};
export const checkPermissions = (permission) => {
  return (req, res, next) => {
    if (!req.objKey.permissions) {
      return res.status(403).json({
        message: "Action dinied ",
      });
    }
  };
};
