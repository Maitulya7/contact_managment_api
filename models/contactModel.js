const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    username:{
        type:String,
        required:[true , "Please add the contact name"]
    },
    email:{
        type:String,
        required:[true, "Please add the contact email"]
    },
    phone_number:{
        type:String,
        required:[true , "Please add the contact phone number"]
    }
}, {
    timestamps:true,
})

module.exports = mongoose.model("Contact" , contactSchema )