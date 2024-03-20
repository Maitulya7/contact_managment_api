const asynHandler = require("express-async-handler")
const User = require("../models/userModal")
const bcrypt = require("bcrypt")
const { use } = require("../routes/userRoutes")

//@desc Register user
//@route POST /api/users/register
//@access public 
const registerUser = asynHandler(async (req, res)=>{
    const {username , email , password} = req.body
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("user already registered")
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password , 10)
    console.log("hashedPassword: " , hashedPassword)

    const user = await User.create({
        username,
        email,
        password:hashedPassword
    })
    console.log(`User created ${user}`)
    if(user){
        res.status(201).json({_id:user.id , email:user.email})
    }else{
        res.status(400);
        throw new Error("User data is not valid")
    }
})

//@desc Login user
//@route POST /api/users/login
//@access public 
const loginUser = asynHandler(async (req ,res)=> {
    res.status(200).json({message:"Login of the user"})
})

//@desc Current user information
//@route POST /api/users/current
//@access private 
const currentUser = asynHandler(async(req,res) => {
    res.status(200).json({message:"Current user information"})
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}
