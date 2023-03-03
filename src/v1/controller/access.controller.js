"use strict";
import AccessService from "./../service/access.service.js";
class AccessController {
  signup = async (req, res, next) => {
    try {
      // console.log("[P]::signup::", req.body);
      return res.status(200).json(await AccessService.signup(req.body));
    } catch (error) {
      next(error);
    }
  };
}
export default new AccessController();
