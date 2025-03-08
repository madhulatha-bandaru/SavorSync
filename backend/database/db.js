import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName : "SavorSync"
  }).then(() => {
    console.log("Connected to Database successfully!")
  }).catch(err => {
    console.log(`Some error occurred while connecting to database ${err}`)
  })
}
