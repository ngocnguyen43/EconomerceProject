"use-strict";
class AccessController {
  signup = async (req, res, next) => {
    try {
      console.log("[P]::signup::", req.body);
      return res.status(200).json({
        code: 200,
        metadata: { userid: 1 },
      });
    } catch (error) {
      next(error);
    }
  };
}
export default new AccessController();
