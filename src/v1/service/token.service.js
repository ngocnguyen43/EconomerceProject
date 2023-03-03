"use strict";

import keytokenModel from "../model/keytoken.model.js";

class KeyTokenService {
  static createToken = async ({ userId, publicKey }) => {
    try {
      const publicKeyString = publicKey.toString();
      const token = await keytokenModel.create({
        user: userId,
        publicKey: publicKeyString,
      });
      return token ? publicKeyString : null;
    } catch (error) {
      return error;
    }
  };
}
export default KeyTokenService;
