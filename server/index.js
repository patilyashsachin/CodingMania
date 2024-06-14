const express = require("express")
const mongoose = require('mongoose')
const cors = require('cors')
const SignupModel = require('./models/Signup')
const User = require("./models/User")

require('./db/connection')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Signup");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    SignupModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})



app.post('/Registration', (req, res) =>{
    SignupModel.create(req.body)
    .then(Signups => res.json(Signups))
    .catch(err => res.json(err))
})


app.post("/",async(req, res)=>{
    let user = new User(req.body);
    let result= await user.save();
    res.send(result);
})



app.listen(3001, ()=>{
    console.log("Server is running")
})