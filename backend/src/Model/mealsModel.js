import mongoose  from "mongoose";

const foodSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  ingredients: {
    type: [String],
  },
  calories: {
    type: Number,
  },
  cuisine: {
    type: String,
  }
});

export default mongoose.model('Food', foodSchema);
