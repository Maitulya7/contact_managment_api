const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000 ;

//middleware 
app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoutes"))
app.use(errorHandler)

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
});
