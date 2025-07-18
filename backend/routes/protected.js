const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    message: `Welcome ${req.user.username} to your tenant: ${req.user.tenant}`,
    user: req.user
  });
});

module.exports = router;
