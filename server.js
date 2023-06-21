const express = require ("express")
const app = express ();
require ('dotenv').config () ;
const connectDB = require ("./config/connectDB");
const contactRouter =require ("./routes/contactRoutes");
const contact = require("./model/contact");


connectDB ();
//Middelware
app.use(express.json());
app.use ("/api/contact",contactRouter)

const PORT = process.env.PORT || 5050;
app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log(`server is runing on port ${PORT}`)
})