const express =  require("express");
const {
  authUser,
  registerUser,
  updateUserProfile,
} = require("../controller/userController.js");
const { protect }= require("../middleware/authMiddleware");
const router = express.Router();

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports = router;