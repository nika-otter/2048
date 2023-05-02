const Router = require("express").Router;
const userController = require("../controllers/user-controller.js");
const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware.js");

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 }),
  userController.registration
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUser);
router.post("/score", authMiddleware, userController.scoreUpdate);
router.post("/scores", userController.scoreGet);
module.exports = router;
