const express = require("express");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController"); // Ensure correct path

const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

// Routes
router.get("/all_users", verifyToken, getAllUsers);
router.get("/user/:id", verifyToken, getUser);
router.put("/update_user", verifyToken, updateUser);
router.delete("/delete_user/:id", verifyToken, deleteUser);

module.exports = router;
