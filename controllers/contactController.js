const asynHandler = require("express-async-handler")
const Contact = require("../models/contactModel")

const handleContactNotFound = (res) =>{
    res.status(404);
    throw new Error("Contact Not Found")
}


//@desc get all contacts
//@route GET /api/contacts
//@access private 
const getContact = asynHandler(async(req,res) =>{
    const contact = await Contact.find({user_id:req.user.id});
    res.status(200).json(contact)
})

//@desc get contacts by ID
//@route GET /api/contacts/:id
//@access private 
const getContactByID = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
      handleContactNotFound(res)
    }
    res.status(200).json({contact})
});

//@desc create contacts
//@route POST /api/contacts
//@access private 
const createContact = asynHandler( async (req,res) => {
    console.log("the request body is :", req.body)
    const {username , email , phone_number} = req.body;
    if(!username || !email  || !phone_number){
        res.status(400);
        throw new Error("All fields are required")
    }
    const contact = await Contact.create({
        username,
        email,
        phone_number,
        user_id:req.user.id
    })
    res.status(201).json({contact})
})

//@desc Update contacts by ID
//@route PUT /api/contacts/:id
//@access private 
const updateContact = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
       handleContactNotFound(res)
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to update other user contacts")
    }
    const updateContact  = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json({updateContact})
})
/*  */
//@desc Delete contacts by ID
//@route DELETE /api/contacts/:id
//@access private 
const deleteContact = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
       handleContactNotFound(res)
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("User do not have permission to delete other user contacts")
    }

    const removedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({ removedContact });
})

module.exports = {
    getContact,
    createContact,
    getContactByID,
    updateContact,
    deleteContact,
}