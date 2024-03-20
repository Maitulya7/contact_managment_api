const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors"); 
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000 ;

//middleware 
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
  }));
app.use(express.json());
app.use("/api/contacts" , require("./routes/contactRoutes"))
app.use("/api/users" , require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`);
});

