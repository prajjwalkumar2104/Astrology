// src/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true, // Prevents duplicate accounts
    lowercase: true,
  },
  password: { type: String, required: false, select: false },

  
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Important: Next.js compiles models multiple times. 
// We check if the model exists before creating it.
export default mongoose.models.User || mongoose.model("User", UserSchema);