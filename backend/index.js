const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Example protected route (optional - for later)
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "Access granted to protected route!", user: req.user });
});

// Test route
app.get("/", (req, res) => {
  res.send("Flowbit Backend is working!");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const protectedRoutes = require('./routes/protected');
app.use('/api/protected', protectedRoutes);

const webhookRoutes = require('./routes/webhook');
app.use('/webhook', webhookRoutes);

