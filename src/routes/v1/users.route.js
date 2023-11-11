const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users.controller");
const verifyToken = require("../../middleware/verifyToken");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.get("/me", verifyToken, userController.getMe);


// suppose authorization route setup be like
// router.get("/product", verifyToken,authorization("admin"), productController.getProduct);

module.exports = router;