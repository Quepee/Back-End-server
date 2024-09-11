//  this is a folder that holds all our functions

const User = require("../models/userModel")


const registerUser = async (request, response) => {
    // request is always going to come frome the front-end
    const {firstName, lastName, email, phone, password} = request.body


    const  userExists = await User.findOne({email})
    if (userExists) {
      return response.status(400).json({error : "user already exists..."})
    } 

    
    const newUser = await User.create({firstName, lastName, email, phone, password})

    if (newUser) {
      response.status(201).json({message : " user registered successfully"})
    } else {
      response.status(400).json({error : "invalid user data"})
    }



}




module.exports = {registerUser}