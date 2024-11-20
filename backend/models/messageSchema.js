import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name Required!"],
      minLength: [3, "Name must contain at least 3 characters!"],
    },
    email: {
      type: String,
      required: [true, "Email Required!"],
      validate: [validator.isEmail, "Please provide valid email!"],
    },
    city: {
      type: String,
      required: [true, "Cityname Required!"],
      minLength: [3, "Cityname must contain at least 3 characters!"],
    },
    Address: {
      type: String,
      required: [true, "Address Required!"],
      minLength: [10, "Address must contain at least 10 characters!"],
    },
  });
  
  export const Message = mongoose.model("Message", messageSchema);