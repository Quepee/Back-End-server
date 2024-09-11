// User Endpoints would be defined here
// the folder holds all our router

const express = require ("express")
const { registerUser } = require("../controllers/userController")
const router = express.Router()

router.post("/register", registerUser)











module.exports = router 