const mongooes = require("mongoose")

const userSchema = mongooes.Schema({
    username:{
        type:String,
        require:[true , "Please add the user name"]
    },
    email:{
        type:String,
        require:[true , "Please add the user email address"],
        unique:[true , "Email address already been taken"]
    },
    password:{
        type:String,
        require:[true, "Please add the user password"]
    }
},{
    timestamps:true,
})

module.exports = mongooes.model("User" , userSchema);