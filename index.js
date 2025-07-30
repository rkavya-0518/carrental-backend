require("./db")


const express = require("express");

const cors = require("cors")

const app = express();

app.use(express.json())

app.use(cors())

const jwt = require("jsonwebtoken");

const Cardata = require("./Routers/CardataRouter");
const Booking = require("./Routers/BookingRouter");
const Findcar = require("./Routers/FindcarRouter");
const enquiries = require("./Routers/EnquiryRouter")
const RegisterModel = require("./Model/RegisterModel");
const Blogrouter = require("./Routers/BlogRouter")
const Middle = require("./Middleware");

app.use("/cardata",Cardata)
app.use("/Booking",Booking)
app.use("/Findcar",Findcar)
app.use ("/enquiries",enquiries)
app.use("/Blog",Blogrouter)



//Signup
app.post("/Register", async (req,res)=>{
    const {name,email,password} = req.body;
   const exists = await RegisterModel.findOne({email: email})

   if(exists){
    res.send({message:"user Already Exists",status:false})
   }
   else{
    const register = new RegisterModel(req.body);({
        name,
        email,
        password,
    })
    const result = await register.save();
    res.send({message:"Success",status:true})
   }

})

app.get("/Register",async (req,res)=>{
    const result = await RegisterModel.find();
    res.send(result)
    
})

//Delete
app.delete("/Register/:_id", async (req , res)=>{
    const query = {_id: req.params._id}
    const result = await RegisterModel.deleteOne(query);
    res.send(result)
})

app.put("/Register/:_id",async(req,res)=>{
    const ref={_id:req.params._id}
    const result=await RegisterModel.updateOne(ref,{$set:req.body});
    res.send(result)
})

app.get("/Register/:_id",async(req,res)=>{
    const query = {_id:req.params._id}
    const result = await RegisterModel.findOne(query);
    res.send(result)
    
})

//Login

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const exists = await RegisterModel.findOne({email: email});

    if(!exists){
        res.send({message:"User Not Found ",status:false})
    }
    else if (exists.password !== password){
        res.send({message:"Invalid Password",status:false})
    }
    else{
        let payload = {
          user:{
              id:exists.id
          }
        }
           const token =   jwt.sign(payload, "Kavya" ,{expiresIn:"60m"})
              res.json({token});
          }
  })

  app.get("/dashboard0518",Middle , async (req,res)=>{

    let user = await RegisterModel.findById(req.user.id)
    if(user){
        res.send(user);
        
    }
})




app.listen(4000,()=> console.log("API Started"))
