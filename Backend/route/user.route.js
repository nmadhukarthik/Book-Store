import express from "express"
import { login, Signup } from "../controller/user.controller.js"

 export const router = express.Router()

router.post("/signup", Signup)
router.post("/login", login)

