const express = require("express");
const router = express.Router(); // <--- You need this
const protect = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

// Profile routes
router.get("/profile", protect, userController.getProfile);
router.put("/profile", protect, userController.updateProfile);

// Admin routes (optional: if using authorization middleware)
router.get("/", protect, userController.getAllUsers);
router.put("/:id/block", protect, userController.blockUser);
router.delete("/:id", protect, userController.deleteUser);

module.exports = router;
