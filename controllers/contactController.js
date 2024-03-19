const asynHandler = require("express-async-handler")
const Contact = require("../models/contactModel")


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
    res.status(200).json({message:`update the contact of ID ${req.params.id}`})
})

//@desc Delete contacts by ID
//@route DELETE /api/contacts/:id
//@access public 
const deleteContact = asynHandler( async (req,res) => {
    res.status(200).json({message:`delete the contact of ID ${req.params.id}`})
})

module.exports = {
    getContact,
    createContact,
    getContactByID,
    updateContact,
    deleteContact,
}