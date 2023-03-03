"use strict";
import bcrypt from "bcrypt";
import crypto from "crypto";
import shopModel from "../model/shop.model.js";
import KeyTokenService from "./token.service.js";
import { createPairToken } from "./../auth/auth.util.js";
import { getFieldsData } from "./../utils/index.js";
const ROLES = {
  SHOP: "Shop",
  WRITTER: "Writter",
  EDITOR: "Editor",
  ADMIN: "Admin",
};
class AccessService {
  static signup = async ({ name, email, password }) => {
    try {
      const isExist = await shopModel.findOne({ email }).lean();
      if (isExist) {
        return {
          error: "XXX",
          message: "Shop is Existed",
        };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newShop = shopModel.create({
        name,
        email,
        password: hashedPassword,
        roles: [ROLES.SHOP],
      });
      console.log(newShop._id);
      if (newShop) {
        //private key(sign) + public key (verify)
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
          privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
        });

        const publicKeyString = await KeyTokenService.createToken({
          userId: newShop._id,
          publicKey: publicKey,
        });
        // console.log(publicKeyString);
        if (!publicKeyString) {
          return {
            error: "XXX",
            message: "publickey error",
          };
        }
        const { accessToken, refreshToken } = await createPairToken(
          { userId: newShop._id, email },
          publicKey,
          privateKey
        );
        return {
          code: 200,
          data: {
            shop: getFieldsData({
              fields: ["_id", "name", "email"],
              object: newShop,
            }),
            accessToken,
            refreshToken,
          },
        };
      }
      return {
        code: 200,
        data: null,
      };
    } catch (error) {
      return {
        error: "XXX",
        message: error.message,
      };
    }
  };
}
export default AccessService;
