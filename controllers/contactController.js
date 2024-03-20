const asynHandler = require("express-async-handler")
const Contact = require("../models/contactModel")



const handleContactNotFound = (res) =>{
    res.status(404);
    throw new Error("Contact Not Found")
    
}


//@desc get all contacts
//@route GET /api/contacts
//@access public 
const getContact = asynHandler(async(req,res) =>{
    const contact = await Contact.find();
    res.status(200).json(contact)
})

//@desc get contacts by ID
//@route GET /api/contacts/:id
//@access public 
const getContactByID = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
      handleContactNotFound(res)
    }
    res.status(200).json({contact})
});

//@desc create contacts
//@route POST /api/contacts
//@access public 
const createContact = asynHandler( async (req,res) => {
    console.log("the request body is :", req.body)
    const {name , email , phone_number} = req.body;
    if(!name || !email  || !phone_number){
        res.status(400);
        throw new Error("All fields are required")
    }
    const contact = await Contact.create({
        name,
        email,
        phone_number
    })
    res.status(201).json({contact})
})

//@desc Update contacts by ID
//@route PUT /api/contacts/:id
//@access public 
const updateContact = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
       handleContactNotFound(res)
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
//@access public 
const deleteContact = asynHandler( async (req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
       handleContactNotFound(res)
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