const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const UserModel = require('./models/User')

require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

//mongoose.connect("mongodb://127.0.0.1:27017/studentSystem")
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;


connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})


// app.post("/createUser", (req,res) => {
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })



app.listen(port, () =>{
    console.log(`Server is running ${port} `)
})