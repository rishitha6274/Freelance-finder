const express = require("express");
const router = express.Router(); 
const protect = require("../middleware/authMiddleware");
const userController = require("../controllers/userController");

router.get("/profile", protect, userController.getProfile);
router.put("/profile", protect, userController.updateProfile);

router.get("/", protect, userController.getAllUsers);
router.put("/:id/block", protect, userController.blockUser);
router.delete("/:id", protect, userController.deleteUser);

module.exports = router;
