import mongoose from "mongoose";
const DataSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      
      
    },
    phone: {
      type: String,
      
    },
    position: {
      type: String,
    },
    source: {
      type: String,
    },
    company: {
      type: String,
      
    }
    
  },
  { timestamps: true }
);

export default mongoose.model("Data", DataSchema);