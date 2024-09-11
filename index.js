// INDEX.js is your ACTUAL SERVER , also same as APP.js

//  Importing Express
const express = require("express")



// Initially express into an app variable
const app = express()



// port
const port = 7116



// importing database function
const connectDb = require("./database/db")


// executing db function
connectDb()


// importing user routes
const userRoute = require("./routes/userRoutes")



// middlware
app.use(express.json())


// Testing Route
app.get("/api", (request, response) => {
  response.json({message: "welcome to my server..."})
})



// using the userRoute
app.use("/api/users", userRoute)








































































// Listening to port
app.listen(port, () => {
  console.log("server connected successfully");
  
})