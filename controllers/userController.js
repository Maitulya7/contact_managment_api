const asynHandler = require("express-async-handler")
const User = require("../models/userModal")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

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
        throw new Error("User already registered");
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
    const {email , password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are required");
    }
    const user = await User.findOne({email})
    //compare password with hashPassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id
            }
        },
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"15m"}
        )
        res.status(200).json({accessToken})
    }else {
        res.status(401)
        throw new Error("Email or Password is invalid")
    }
})

//@desc Current user information
//@route POST /api/users/current
//@access private 
const currentUser = asynHandler(async(req,res) => {
    res.status(200).json(req.user)
})

module.exports = {
    registerUser,
    loginUser,
    currentUser
}
