import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true,
    minLength : [3, "Firstname must contain atleast 3 characters"],
    maxLength : [20, "Firstname cannot exceed 20 characters"]
  },
  lastName : {
    type : String,
    required : true,
    minLength : [3, "Lastname must contain atleast 3 characters"],
    maxLength : [20, "Lastname cannot exceed 20 characters"]
  },
  email : {
    type : String,
    required:true,
    validate : [validator.isEmail, "Provide a valid email"],
  },
  phone : {
    type : String,
    required : true,
    minLength : [11, "Phone Number must contain 11 digits!"],
    maxLength : [11, "Phone Number must contain 11 digits!"],
  },
  time : {
    type : String,
    required : true,
  },
  date : {
    type : String,
    required : true,
  }
})

export const Reservation = mongoose.model("Reservation", reservationSchema);