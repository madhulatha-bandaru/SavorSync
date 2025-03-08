import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {connectDB} from "./database/db.js"
import { connect } from "mongoose"
import { errorMiddleware } from "./errors/error.js"
import reservationRouter from "./routes/reservationRoute.js"

const app = express()
dotenv.config({path: "./config/.env"})

app.use(cors({
  origin : [process.env.FRONTEND_URL], //frontend path 
  methods :["POST"],
  credentials : true
}))

app.use(express.json()) //whatever string or value you give, it will convert into json object
app.use(express.urlencoded({extended : true}));
app.use('/api/v1/reservation',reservationRouter)

connectDB();


app.use(errorMiddleware)
export default app