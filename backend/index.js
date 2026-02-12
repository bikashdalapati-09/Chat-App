import express from "express"
import dotenv from 'dotenv'
import connectDB from "./config/database.js"
import userRoute from "./routes/userRoute.js"
import messageRouter from "./routes/messageRoute.js"
import cookieParser from "cookie-parser"

dotenv.config({})

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.use(cookieParser())

connectDB()

// routes
app.use("/api/v1/user", userRoute)
app.use("/api/v1/message", messageRouter)

app.listen(PORT, ()=>{
    console.log (`Server is running on ${PORT}`)
})