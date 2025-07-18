const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: false, // or remove this line if truly optional
  },
  password: String,
  tenant: String,
});
module.exports = mongoose.model("User", userSchema);

