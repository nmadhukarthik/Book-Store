import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import clc from "cli-color"
import cors from "cors"
import {router as bookRoute} from "./route/book.route.js"
import { router as userRoute } from "./route/user.route.js"  
//import { login, Signup } from "./controller/user.controller.js"
//import { getBook } from "./controller/book.controller.js"

const app = express()

//global middlewares
app.use(cors())
app.use(express.json())

dotenv.config()

const port = process.env.PORT || 4000
const URI = process.env.MongoDbURI

//connect to mongoDB
try {
    mongoose.connect(URI)
    console.log(clc.blue.bold.underline("mongodb connected successfully"))
} catch (error) {
    console.log(clc.red.bold.underline(error))
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)


// Or we can just write these 3 lines of code innstead of route also
// app.get("/book", getBook)
// app.post("/signup", Signup)
// app.post("/login", login)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})